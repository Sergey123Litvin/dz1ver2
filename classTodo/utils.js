function modifyData(item) {
    return {text: item.title, checked: item.completed, id: item.id,editable: false};
}

export default modifyData;