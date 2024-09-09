import { useState } from "react";


function coments() {
    const [comments, setComments] = useState(
        [
            { id: 1, text: "Это первый комментарий" },
            { id: 2, text: "Это второй комментарий" },
            { id: 3, text: "Это третий комментарий" }
            ]
    )
}
