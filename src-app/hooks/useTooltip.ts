import type { RefObject } from "react";
import type { Placement } from "@react-types/overlays";
import { useTooltipTriggerState } from "react-stately";
import { useTooltipTrigger, useTooltip, mergeProps, useOverlayPosition } from "react-aria";
import { useEffect, useState } from "react";

const ANIMATION_OFFSET = 5;

interface TooltipOptions {
    placement?: Placement;
    offset?: number;
    delay?: number;
    isDisabled?: boolean;
    isOpen?: boolean;
}

/**
 * Animation and Offset are not configurable to keep think simple
 */
const usePlacementTooltip = (
    triggerRef: RefObject<HTMLElement>, // first child
    tooltipRef: RefObject<HTMLElement>, // second child
    options?: TooltipOptions,
) => {
    const [isAnimeOpen, setAnimeOpen] = useState(false);
    const state = useTooltipTriggerState({
        isOpen: options?.isOpen,
    });
    const { triggerProps, tooltipProps: tooltipTriggerProps } = useTooltipTrigger(
        {
            delay: options?.delay,
            isDisabled: options?.isDisabled,
        },
        state,
        triggerRef,
    );
    const { tooltipProps } = useTooltip(tooltipTriggerProps, state);
    const {
        overlayProps: positionProps,
        arrowProps,
        placement: tooltipPlacement,
    } = useOverlayPosition({
        targetRef: triggerRef,
        overlayRef: tooltipRef,
        placement: options?.placement ?? "top",
        offset: options?.offset,
        isOpen: state.isOpen,
    });

    useEffect(() => {
        if (state.isOpen) {
            // show DOM as soon as the state is open.
            setAnimeOpen(true);
        }
    }, [state.isOpen]);

    useEffect(() => {
        if (!tooltipRef.current) return;

        const theOpenState = state.isOpen;

        let x = 0;
        let y = 0;

        switch (tooltipPlacement) {
            case "bottom":
                y = -ANIMATION_OFFSET;
                break;
            case "top":
                y = ANIMATION_OFFSET;
                break;
            case "left":
                x = ANIMATION_OFFSET;
                break;
            case "right":
                x = -ANIMATION_OFFSET;
        }

        tooltipRef.current
            .animate(
                [
                    {
                        transform: `translate3d(${state.isOpen ? x : 0}px, ${
                            state.isOpen ? y : 0
                        }px, 0)`,
                        opacity: state.isOpen ? 0 : 1,
                    },
                    {
                        transform: `translate3d(${state.isOpen ? 0 : x}px, ${
                            state.isOpen ? 0 : y
                        }px, 0)`,
                        opacity: state.isOpen ? 1 : 0,
                    },
                ],
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

                // only remove DOM once the animation is finished
                if (!theOpenState) setAnimeOpen(false);
            });
    }, [state.isOpen, tooltipPlacement, tooltipRef]);

    // arrowProps only returns CSS top and left.
    const arrowStyle = {
        ...arrowProps.style,
        top:
            tooltipPlacement === "top"
                ? "100%"
                : tooltipPlacement === "bottom"
                ? 0
                : arrowProps.style?.top,
        left:
            tooltipPlacement === "left"
                ? "100%"
                : tooltipPlacement === "right"
                ? 0
                : arrowProps.style?.left,
    };

    return {
        triggerProps,
        tooltipProps: mergeProps(tooltipProps, positionProps, {
            "data-placement": tooltipPlacement,
        }),
        arrowProps: mergeProps(arrowProps, {
            style: arrowStyle,
            "data-placement": tooltipPlacement,
        }),
        state: { ...state, isOpen: state.isOpen || isAnimeOpen },
    };
};

export { usePlacementTooltip as useTooltip };
