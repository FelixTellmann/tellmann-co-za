import React, { FC, useEffect, useRef } from "react";
import TypedJS from 'typed.js';

type TypedProps = {
    content: string[]
    typeSpeed?: number
    backSpeed?: number
    startDelay?: number
    backDelay?: number
    loop?: boolean
    loopCount?: number
    showCursor?: boolean
    cursorChar?: string
    smartBackspace?: boolean
    attr?: string
    bindInputFocusEvents?: boolean
    shuffle?: boolean

}

export const Typed: FC<TypedProps> = ({ content, ...rest }) => {
    let typedElement = useRef();
    let seoElement = useRef();
    const options = {
        strings: content,
        ...rest,
    };
    useEffect(() => {
        const typed = new TypedJS(typedElement.current, options);
        return () => {
            typed.destroy();
        };
    }, [content]);

    return <span>
        <style jsx>{`
                .typed-text__seo {
                    position: absolute !important;
                    height: 1px; width: 1px;
                    overflow: hidden;
                    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
                    clip: rect(1px, 1px, 1px, 1px);
                }
        `}</style>
        <style jsx global>{`
                .typed-cursor {
                    font-size: 0.9em;
                }
        `}</style>
        <div ref={seoElement} className="typed-text__seo">
            {content.map((string, i) => <p key={i}>{string}</p>)}
        </div>
        <span style={{ wordBreak: 'keep-all' }} ref={typedElement} className="typed-text" />
    </span>;

};