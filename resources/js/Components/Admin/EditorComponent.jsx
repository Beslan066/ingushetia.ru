import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from '@editorjs/header';
import Paragraph from '@editorjs/paragraph';
import SimpleImage from "@editorjs/simple-image";
import List from "@editorjs/list";
import ImageTool from '@editorjs/image';
import LinkTool from '@editorjs/link';
import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import Warning from '@editorjs/warning';
import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import Checklist from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';





const DEFAULT_INITIAL_DATA = {
    "time": new Date().getTime(),
    "blocks": [
        {
            "type": "header",
            "data": {
                "text": "Введите текст новости здесь",
                "level": 2
            }
        }
    ]
};

const EditorComponent = () => {

    const ejInstance = useRef();

    const initEditor = () => {
        const editor = new EditorJS({
            holder: 'editorjs',
            onReady: () => {
                ejInstance.current = editor;
            },
            autofocus: true,
            data: DEFAULT_INITIAL_DATA,
            onChange: async () => {
                let content = await editor.saver.save();
                },
            tools: {
                header: Header,
                paragraph: Paragraph,
                list: {
                    class: List,
                    inlineToolbar: true,
                    config: {
                        defaultStyle: 'unordered'
                    }
                },
                image: {
                    class: ImageTool,
                    config: {
                        endpoints: {
                            byFile: 'http://127.0.0.1:8000/',
                            byUrl: 'http://127.0.0.1:8000/',
                        }
                    }
                },
                linkTool: {
                    class: LinkTool,
                    config: {
                        endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching,
                    }
                },
                embed: Embed,
                table: Table,
                warning: Warning,
                quote: Quote,
                Marker: {
                    class: Marker,
                    shortcut: 'CMD+SHIFT+M',
                },
                checklist: {
                    class: Checklist,
                    inlineToolbar: true,
                },
                delimiter: Delimiter,
                inlineCode: {
                    class: InlineCode,
                    shortcut: 'CMD+SHIFT+M',
                },




            },
        });
    };

    const getSavedData = () => {
        const data = localStorage.getItem('editorData');
        return data ? JSON.parse(data) : {};
    };

    const saveData = (data) => {
        localStorage.setItem('editorData', JSON.stringify(data));
    };

    useEffect(() => {
        if (ejInstance.current === null) {
            initEditor();
        }

        return () => {
            ejInstance?.current?.destroy();
            ejInstance.current = null;
        };
    }, []);


    return  <><div id='editorjs'></div></>;
}

export default EditorComponent;
