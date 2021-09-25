import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useRouteMatch } from "react-router-dom";
import style from "./styles/Menu.module.scss";
import {
    FocusRing,
    mergeProps,
    useFocusWithin,
    useHover,
    useTooltip,
    useTooltipTrigger,
} from "react-aria";
import { useTooltipTriggerState } from "react-stately";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import { classNames } from "@cedeber/frontafino";

type Rect = Pick<DOMRect, "left" | "top" | "width" | "height">;

const Menu: FC = () => {
    const hoverBackgroundRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const activeRef = useRef<HTMLAnchorElement>(null);

    const [backgroundStyle, setBackgroundStyle] = useState<Rect>();

    // Used to react to each url change.
    const location = useLocation();

    const menus = [
        {
            to: "/",
            name: "🌿 Basic",
            ref: useRef<HTMLDivElement>(null),
            match: useRouteMatch("/")?.isExact,
            tooltip:
                "Synchronous and Asynchronous WebAssembly in the main thread or in a Web Worker",
        },
        {
            to: "/failures",
            name: "🧨 Failures",
            ref: useRef<HTMLDivElement>(null),
            match: useRouteMatch("/failures")?.isExact,
            tooltip: "Promise rejection, panic and crashes",
        },
    ];

    const anime = useCallback(
        (from: HTMLElement | Element) => {
            if (
                from == undefined ||
                containerRef.current == undefined ||
                hoverBackgroundRef.current == undefined
            )
                return;

            const containerRect = containerRef.current.getBoundingClientRect();
            const hoverRect = from.getBoundingClientRect();

            const x = hoverRect.left - containerRect.left;
            const y = backgroundStyle?.top;
            const w = hoverRect.width;

            hoverBackgroundRef.current
                .animate(
                    { transform: `translate3d(${x}px, ${y}px, 0)`, width: `${w}px` },
                    {
                        duration: 250,
                        easing: "ease-out",
                        fill: "forwards", // Keep the changes applied once finished
                    },
                )
                .finished.then((anim) => {
                    // Apply the styles to the element
                    anim.commitStyles();
                    anim.cancel();
                });
        },
        [backgroundStyle],
    );

    const { hoverProps } = useHover({
        onHoverStart(event) {
            anime(event.target);
        },
    });

    const { focusWithinProps } = useFocusWithin({
        onFocusWithin(event) {
            anime(event.target);
        },
    });

    const { hoverProps: containerHoverProps } = useHover({
        onHoverEnd() {
            if (activeRef.current) anime(activeRef.current);
        },
    });

    const { focusWithinProps: containerFocusWithinProps } = useFocusWithin({
        onBlurWithin() {
            if (activeRef.current) anime(activeRef.current);
        },
    });

    useEffect(() => {
        const hbg = hoverBackgroundRef.current;

        menus.forEach((menu) => {
            if (menu.match) {
                activeRef.current = menu.ref.current;

                const containerRect = containerRef.current?.getBoundingClientRect();
                const hoverRect = menu.ref.current?.getBoundingClientRect();

                if (containerRect == undefined || hoverRect == undefined || hbg == undefined)
                    return;

                setBackgroundStyle({
                    left: hoverRect.left - containerRect.left,
                    top: hoverRect.top - containerRect.top,
                    width: hoverRect.width,
                    height: hoverRect.height,
                });
            }
        });
    }, [location]);

    return (
        <FocusRing focusRingClass={style.menuFocus} within>
            <nav
                className={style.menu}
                ref={containerRef}
                {...mergeProps(containerHoverProps, containerFocusWithinProps)}
            >
                <div
                    className={style.background}
                    ref={hoverBackgroundRef}
                    style={{
                        width: backgroundStyle?.width,
                        height: backgroundStyle?.height,
                        transform: `translate3d(${backgroundStyle?.left}px, ${backgroundStyle?.top}px, 0)`,
                    }}
                />
                {menus.map((menu) => (
                    <div
                        {...mergeProps(hoverProps, focusWithinProps)}
                        className={style.linkContainer}
                        ref={menu.ref}
                        key={menu.to}
                    >
                        <MenuNav to={menu.to} tooltip={menu.tooltip} name={menu.name} />
                    </div>
                ))}
            </nav>
        </FocusRing>
    );
};

interface MenuNavProps {
    name: string;
    to: string;
    tooltip: JSX.Element | string;
}

const MenuNav: FC<MenuNavProps> = (props) => {
    const state = useTooltipTriggerState();
    const ref = useRef<HTMLAnchorElement>(null);
    const { triggerProps, tooltipProps: tooltipTriggerProps } = useTooltipTrigger({}, state, ref);
    const { tooltipProps } = useTooltip(tooltipTriggerProps, state);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const { styles } = usePopper(ref.current, tooltipRef.current, {
        strategy: "fixed",
        placement: "bottom",
        modifiers: [{ name: "offset", options: { offset: [0, 15] } }],
    });

    useEffect(() => {
        if (!tooltipRef.current) return;

        // Need to set it first in order to retrieve the matrix transformation
        tooltipRef.current.style.transform = styles.popper.transform ?? "none";
        const transform = window.getComputedStyle(tooltipRef.current).transform;
        const match = transform.match(/-?\d+\.?\d+|\d+/g);
        const x = Number(match?.[4] ?? 0);
        const y = Number(match?.[5] ?? 0);

        tooltipRef.current
            .animate(
                {
                    transform: `translate3d(${x}px, ${y + (state.isOpen ? -5 : 5)}px, 0)`,
                    opacity: state.isOpen ? 1 : 0,
                },
                {
                    duration: 180,
                    easing: "ease-out",
                    fill: "forwards", // Keep the changes applied once finished
                },
            )
            .finished.then((anim) => {
                // Apply the styles to the element
                anim.commitStyles();
                anim.cancel();
            });
    }, [state.isOpen]);

    return (
        <>
            <NavLink
                to={props.to}
                className={style.link}
                exact
                activeClassName={style.active}
                ref={ref}
                {...triggerProps}
            >
                {[...props.name].map((str, index) => (
                    <span className={classNames({ [style.letter]: str !== " " })} key={index}>
                        {str}
                    </span>
                ))}
            </NavLink>
            {createPortal(
                <div
                    style={styles.popper}
                    className={style.tooltip}
                    aria-hidden="true"
                    {...tooltipProps}
                    ref={tooltipRef}
                >
                    {props.tooltip}
                </div>,
                document.body,
            )}
        </>
    );
};

export { Menu };
