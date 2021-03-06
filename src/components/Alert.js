import React from 'react'

export default function Alert(props) {

        const capitalize = (word)=> {
                const lower = word.toLowerCase();
                return lower.charAt(0).toUpperCase() + lower.slice(1);
        }
  return (
        
          props.alert && <div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">

                  <svg xmlns="http://www.w3.org/2000/svg" className={props.alert.type ===`success`?`bi bi-check-circle-success mx-2`:''} width="27" height="27" fill="currentColor" role="img" aria-label="Success:" viewBox="0 0 16 16"><use>{React.createElement('use', { href: "#check-circle-fill", "xlinkHref": "#check-circle-fill" })} </use><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" /></svg>
                  <div>
                          <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
                  </div>
          </div>
  )
}

