/* 

A component is tied to the CSS of the same name .module.css

The CSS is imported and given the name styles.

{children} is a special parameter from the external representing all web elements that were sandwhiched in between this component in the external environment

We have a CSS that styles any id named container, so we specify this.

*/

import styles from './container.module.css'

function Container({ children }) {
    return <div className={styles.container}>{children}</div>
 }
 
 export default Container