import { LitElement, html, css, customElement, property, CSSResult, unsafeCSS, eventOptions, Constructor, UpdatingElement } from 'lit-element';
import {connect} from 'pwa-helpers'
import { openWcLogo } from '../open-wc-logo';
import env from '../environment'
import { store } from '../store/store';

// import { homePage } from '../routing';
// import { store } from '../store/store';
import { RootState } from '../store/reducers/types';
import { appActions } from '../store/actions';
// import { appActions } from '../store/actions';

interface ClassElement {
   kind: 'field'|'method';
   key: PropertyKey;
   placement: 'static'|'prototype'|'own';
   initializer?: Function;
   extras?: ClassElement[];
   finisher?: <T>(clazz: Constructor<T>) => undefined | Constructor<T>;
   descriptor?: PropertyDescriptor;
 }
 
function media():any {
   return (protoOrDescriptor: Object|ClassElement, name?: string) => 
      (name !== undefined) ? null : standardMedia(protoOrDescriptor as ClassElement)    
}

function standardMedia(element: ClassElement){
   return {
      ...element,
      finisher(_class: typeof UpdatingElement){
         const orignal = _class.prototype.connectedCallback
         _class.prototype.connectedCallback = () => {
            var x = window.matchMedia("(max-width: 500px)");
            x.addListener(() => (_class.prototype[element.key as keyof UpdatingElement] as any)()); 
         }
         // clazz.prototype.connectedCallback = 
      },
   }
}


var callbacks = new Map<Symbol, Function>()

const registerMediaQueryWatcher = (callback: (e: MediaQueryListEvent) => any) => {
   const mql = window.matchMedia('(max-width: 700px)');
   
   // var x: MediaQueryListEvent; 
   // mql.addListener(callback)
   // callbacks.set(symbol, callback)
   
   // callback(mql)
   return null
}

const unregisterMediaQueryWatcher = (callbacks) => {

}


@customElement('home-page')
export class HomePage extends connect(store)(LitElement) {
   
   mediaQueryCallback = ({matches, media}) => {
      new MediaQueryListEvent('')
   }

   @property({type: Number, attribute: false})
   _counts: number = 0

   stateChanged(state: RootState){
      this._counts = state.counter!.value
   }

   // connectedCallback(){
   //    super.connectedCallback();
   //    var x = window.matchMedia("(max-width: 700px)");
   //    this.mediaQueryCallback({media: x.media, matches: x.matches})
   //    x.addListener(this.mediaQueryCallback);
   // }

   // disconnectedCallback(){
   //    super.disconnectedCallback()

   // }

   render(){
      return html`
         <div>${this._counts}</div>
         <button @click="${() => store.dispatch(appActions.increment())}">Inkrementuj</button>
      `
   }
}

// @customElement('app-starter')
// export class AppStarter extends LitElement {

//   static get properties() {
//     return {
//       title: { type: String },
//       page: { type: String },
//     };
//   }

//   static get styles() {
//     return css`
//       :host {
//         min-height: 100vh;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: flex-start;
//         font-size: calc(10px + 2vmin);
//         color: #1a2b42;
//         max-width: 960px;
//         margin: 0 auto;
//         text-align: center;
//       }

//       main {
//         flex-grow: 1;
//       }

//       .logo > svg {
//         margin-top: 36px;
//         animation: app-logo-spin infinite 20s linear;
//       }

//       @keyframes app-logo-spin {
//         from {
//           transform: rotate(0deg);
//         }
//         to {
//           transform: rotate(360deg);
//         }
//       }

//       .app-footer {
//         font-size: calc(12px + 0.5vmin);
//         align-items: center;
//       }

//       .app-footer a {
//         margin-left: 5px;
//       }
//     `;
//   }

//   render() {
//     return html`
//       <main>
//         <div class="logo">${openWcLogo}</div>
//         <h1>My1456</h1>

//         <p>Edit <code>src/MyApp.js</code> and save to reload.</p>
//         <a
//           class="app-link"
//           href="https://open-wc.org/developing/#code-examples"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Code examples
//         </a>
//       </main>

//       <p class="app-footer">
//         🚽 Made with love by
//         <a target="_blank" rel="noopener noreferrer" href="https://github.com/open-wc">open-wc</a>.
//       </p>
//     `;
//   }
// }
