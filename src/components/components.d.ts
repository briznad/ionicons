/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface IonIcon {
      /**
       * Specifies the label to use for accessibility. Defaults to the icon name.
       */
      'ariaLabel': string;
      /**
       * The color to use from your Sass `$colors` map. Default options are: `"primary"`, `"secondary"`, `"danger"`, `"light"`, and `"dark"`. For more information, see [Theming your App](/docs/theming/theming-your-app).
       */
      'color': string;
      /**
       * Specifies which icon to use on `ios` mode.
       */
      'ios': string;
      /**
       * Specifies which icon to use on `md` mode.
       */
      'md': string;
      /**
       * Specifies which icon to use. The appropriate icon will be used based on the mode. For more information, see [Ionicons](/docs/ionicons/).
       */
      'name': string;
      /**
       * The size of the icon. Available options are: `"small"` and `"large"`.
       */
      'size': string;
    }
  }

  interface HTMLIonIconElement extends StencilComponents.IonIcon, HTMLStencilElement {}

  var HTMLIonIconElement: {
    prototype: HTMLIonIconElement;
    new (): HTMLIonIconElement;
  };
  interface HTMLElementTagNameMap {
    'ion-icon': HTMLIonIconElement;
  }
  interface ElementTagNameMap {
    'ion-icon': HTMLIonIconElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': JSXElements.IonIconAttributes;
    }
  }
  namespace JSXElements {
    export interface IonIconAttributes extends HTMLAttributes {
      /**
       * Specifies the label to use for accessibility. Defaults to the icon name.
       */
      'ariaLabel'?: string;
      /**
       * The color to use from your Sass `$colors` map. Default options are: `"primary"`, `"secondary"`, `"danger"`, `"light"`, and `"dark"`. For more information, see [Theming your App](/docs/theming/theming-your-app).
       */
      'color'?: string;
      /**
       * Specifies which icon to use on `ios` mode.
       */
      'ios'?: string;
      /**
       * Specifies which icon to use on `md` mode.
       */
      'md'?: string;
      /**
       * Specifies which icon to use. The appropriate icon will be used based on the mode. For more information, see [Ionicons](/docs/ionicons/).
       */
      'name'?: string;
      /**
       * The size of the icon. Available options are: `"small"` and `"large"`.
       */
      'size'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
