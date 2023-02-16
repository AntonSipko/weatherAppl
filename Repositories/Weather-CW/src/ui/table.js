export class Table {
    //data.id
    //data[obj.fieldName]
    
    #parentElement
    #schema //array of objects {columnName: <string>, fieldName: <string>}
    #tbodyElement
    constructor(parentId, tableName, schema) {
        const parentElement = document.getElementById(parentId);
        this.#schema = schema;
        this.#parentElement=parentElement;
        if (!parentElement) {
            throw `wrong parentId ${parentId}`
        }
       parentElement.innerHTML = ` <h3 class="table-logo">${tableName} </h3>
        <table class="center">
            <thead>
                <tr>
                    ${getHeader(schema)}                    
                </tr>
            </thead>
            <tbody id="${tableName}">
               
            </tbody>
        </table>`
        this.#tbodyElement = document.getElementById(tableName);
        hideTable(parentElement);
        

    }
    addRow(object){
        this.#tbodyElement.innerHTML += getRow(object, this.#schema);
    }
    showTable(){
        this.#parentElement.style.display="block"
    }
    
}
function getHeader(schema) {
    return schema.map(obj => `<th>${obj.columnName}</th>`).join('');
}
function getRow(data, schema) {
    return `<tr> ${getTds(data, schema)} </tr>`
}
function getTds(data, schema) {
    return schema.map(obj => `<td>${data[obj.fieldName]}</td>`).join('')
}
function hideTable(parentElement){
    parentElement.style.display="none"
}


