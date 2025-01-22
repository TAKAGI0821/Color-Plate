(()=>{
    //要素
    const $table = document.getElementById('color-table');

    //定数
    const initialColor = {r:193, g:190, b:211};
    const cellsNum = 8; //マス数

    const main = () =>{
        $table.InnerHTML = "";

        //テーブルを準備
        for(let i=0; i < cellsNum; i++){
            const tr = document.createElement("tr");
            for(let j=0; j < cellsNum; j++){
                const td = document.createElement("td");
                tr.appendChild(td);
            }
            $table.appendChild(tr);
        } 
        
        const $cells = document.querySelectorAll('td');

        $cells.forEach(cell => {
            //セルの最初の色を設定
            cell.style.backgroundColor = `rgb(${initialColor.r},${initialColor.g},${initialColor.b})`;

            //各セルにクリックイベントを追加
            addColorChangeEvent(cell);
        });
    };


    const addColorChangeEvent = (cell) => {
        //クリックされたセルの色を変える
        cell.addEventListener("click", function(){
            setColor();
            cell.style.backgroundColor = `rgb(${r},${g},${b})`;
        });
    };

    const setColor = () =>{
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
    };

    main();
})();


