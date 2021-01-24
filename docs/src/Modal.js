import React from "react";

export default function Modal({
    id,
    title,
    body,
    customFooter,
}) {
    return (
        <div
            className="modal fade"
            id={id}
            tabIndex="-1"
            role="dialog"
            aria-labelledby="modalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="modalLabel">
                            {title}
                        </h4>
                        <button
                            type="button"
                            className="btn btn-close"
                            data-bs-dismiss="modal"
                        >
                            <span className="visually-hidden">Close</span>
                        </button>
                    </div>
                    <div className="modal-body">{body}</div>
                </div>
            </div>
        </div>
    );
}
