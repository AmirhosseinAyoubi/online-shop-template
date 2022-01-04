import React from 'react'
import style from "./message.module.css"

function Message({ message, error = "", success = "", alert = "" }) {
    return (
        <div className={`${style.message_container} ${error && style.error} ${success && style.success} ${alert && style.alert}`}>
            <span>
                {message}
            </span>
        </div>
    )
}

export default Message


