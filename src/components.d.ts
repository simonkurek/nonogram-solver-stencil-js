/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppBoard {
        "size": number;
        "xs": number[][];
        "ys": number[][];
    }
    interface AppButton {
        "onClick": () => void;
        "stickied": boolean;
    }
    interface AppCanvas {
    }
    interface AppHeader {
    }
    interface AppInput {
    }
    interface AppRoot {
    }
}
declare global {
    interface HTMLAppBoardElement extends Components.AppBoard, HTMLStencilElement {
    }
    var HTMLAppBoardElement: {
        prototype: HTMLAppBoardElement;
        new (): HTMLAppBoardElement;
    };
    interface HTMLAppButtonElement extends Components.AppButton, HTMLStencilElement {
    }
    var HTMLAppButtonElement: {
        prototype: HTMLAppButtonElement;
        new (): HTMLAppButtonElement;
    };
    interface HTMLAppCanvasElement extends Components.AppCanvas, HTMLStencilElement {
    }
    var HTMLAppCanvasElement: {
        prototype: HTMLAppCanvasElement;
        new (): HTMLAppCanvasElement;
    };
    interface HTMLAppHeaderElement extends Components.AppHeader, HTMLStencilElement {
    }
    var HTMLAppHeaderElement: {
        prototype: HTMLAppHeaderElement;
        new (): HTMLAppHeaderElement;
    };
    interface HTMLAppInputElement extends Components.AppInput, HTMLStencilElement {
    }
    var HTMLAppInputElement: {
        prototype: HTMLAppInputElement;
        new (): HTMLAppInputElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLElementTagNameMap {
        "app-board": HTMLAppBoardElement;
        "app-button": HTMLAppButtonElement;
        "app-canvas": HTMLAppCanvasElement;
        "app-header": HTMLAppHeaderElement;
        "app-input": HTMLAppInputElement;
        "app-root": HTMLAppRootElement;
    }
}
declare namespace LocalJSX {
    interface AppBoard {
        "size": number;
        "xs": number[][];
        "ys": number[][];
    }
    interface AppButton {
        "onButtonClickEvent"?: (event: CustomEvent<boolean>) => void;
        "onClick"?: () => void;
        "stickied"?: boolean;
    }
    interface AppCanvas {
    }
    interface AppHeader {
    }
    interface AppInput {
    }
    interface AppRoot {
    }
    interface IntrinsicElements {
        "app-board": AppBoard;
        "app-button": AppButton;
        "app-canvas": AppCanvas;
        "app-header": AppHeader;
        "app-input": AppInput;
        "app-root": AppRoot;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-board": LocalJSX.AppBoard & JSXBase.HTMLAttributes<HTMLAppBoardElement>;
            "app-button": LocalJSX.AppButton & JSXBase.HTMLAttributes<HTMLAppButtonElement>;
            "app-canvas": LocalJSX.AppCanvas & JSXBase.HTMLAttributes<HTMLAppCanvasElement>;
            "app-header": LocalJSX.AppHeader & JSXBase.HTMLAttributes<HTMLAppHeaderElement>;
            "app-input": LocalJSX.AppInput & JSXBase.HTMLAttributes<HTMLAppInputElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
        }
    }
}
