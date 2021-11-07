import { useCallback, useEffect, useRef, useState, VFC } from "react";
import { NavLink, useLocation, useMatch } from "react-router-dom";
import style from "./styles/Menu.module.scss";
import { FocusRing, mergeProps, useFocusWithin, useHover } from "react-aria";
import { classNames } from "@cedeber/frontafino";
import { useTooltip } from "../hooks/useTooltip";
import { Tooltip } from "./Tooltip";
import { useDatGui } from "../hooks/useDatGui";

type Rect = Pick<DOMRect, "left" | "top" | "width" | "height">;

const Menu: VFC = () => {
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
            match: !!useMatch("/"),
            tooltip:
                "Synchronous and Asynchronous WebAssembly in the main thread or in a Web Worker",
        },
        {
            to: "/failures",
            name: "🧨 Failures",
            ref: useRef<HTMLDivElement>(null),
            match: !!useMatch("/failures"),
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

const MenuNav: VFC<MenuNavProps> = (props) => {
    const showTooltip = useDatGui("Tooltip", false);
    const offset = useDatGui("Tooltip", 4, 0, 15, 1);

    const triggerRef = useRef<HTMLAnchorElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const { triggerProps, tooltipProps, arrowProps, state } = useTooltip(triggerRef, tooltipRef, {
        placement: "bottom",
        offset,
        isOpen: showTooltip || undefined,
    });

    return (
        <>
            <NavLink
                to={props.to}
                end
                className={({ isActive }) => classNames(style.link, { [style.active]: isActive })}
                ref={triggerRef}
                {...triggerProps}
            >
                {[...props.name].map((str, index) => (
                    <span className={classNames({ [style.letter]: str !== " " })} key={index}>
                        {str}
                    </span>
                ))}
            </NavLink>
            {state.isOpen && (
                <Tooltip tooltipProps={tooltipProps} arrowProps={arrowProps} ref={tooltipRef}>
                    {props.tooltip}
                </Tooltip>
            )}
        </>
    );
};

export { Menu };
