/**
 * This mixin contains the properties and methods required for a card.
 * @polymerMixin
 * @mixinFunction
 */
export const AspenCardMixin = (superclass) => class extends superclass {


		static get properties(){
        return {
            
            /** The model for the card. */
            model:{
                type: Object,
                value: null,
                notify: true
            },

            /** A flag that indicates that the card is being displayed on a phone. */
            isPhone:{
                type: Boolean,
                value: false,
                reflectToAttribute: true
            }

        }
		}

		/**
		 * This method notifies the enclosing tray to display more detailed
		 * information about this card.
		 * @param {Object} e the event object
		 */
		 handleCardSelected(e){
        
        this.dispatchEvent(new CustomEvent('card-selected', {
            bubbles: true,
            composed: true,
            detail: {
                model: this.model
            }
        }));
		}

		/**
		 * This method notifies the enclosing tray to display an external link in a new window.
		 * @param {Object} e the event object
		 */ 
		handleCardLaunched(e){
        this.dispatchEvent(new CustomEvent('card-launched', {
            bubbles: true,
            composed: true,
            detail: {
                model: this.model
            }
        }));
		}

		/**
		 * This method notifies the enclosing tray to display a confirmation dialog,
		 * to verify that this card is to be deleted.
		 */
		requestCardDeleted(){

        this.dispatchEvent(new CustomEvent('request-card-deleted', {
            bubbles: true,
            composed: true,
            detail: {
                model: this.model
            }
        }));
		}

		/** 
		 * This method notifies the enclosing tray, that the card is to be cloned.
		 */ 
		handleCardCloned(){
        this.dispatchEvent(new CustomEvent('card-cloned', {
            bubbles: true,
            composed: true,
            detail: {
                model: this.model
            }
        }));
		}
		
		
}
