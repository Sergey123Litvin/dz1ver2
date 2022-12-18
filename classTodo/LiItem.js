import StatusLi from "./StatusLi.js";

class LiItem {
    constructor(obj) {
        this.statusLi = StatusLi.getInstance();

        this.alertSpan = document.createElement('span');

        this.id = obj.id;
        this.checked = obj.checked;
        this.editable = obj.editable;
        this.text = obj.text;

        this.editLi = this.editLi.bind(this);
        this.removeLi = this.removeLi.bind(this);
        this.checkedLi = this.checkedLi.bind(this);
        this.cancelLi = this.cancelLi.bind(this);
        this.saveEditLi = this.saveEditLi.bind(this);
        this.inputText = this.inputText.bind(this);
        this.validate = this.validate.bind(this);
    }

    editLi() {
      this.statusLi.editLi(this.id);
    }

    removeLi() {
      this.statusLi.removeLi(this.id);
    }

    inputText(e) {
      this.text = e.target.value;
    }

    validate() {
      if(this.text === '') {
        this.alertSpan.innerText = 'Enter value!';
      } else {
        this.saveEditLi();
      }
    }

    saveEditLi() {
      this.statusLi.saveEditLi(this.id, this.text);
    }

    cancelLi() {
      this.statusLi.editLi(this.id);
    }

    checkedLi() {
      this.statusLi.checkedLi(this.id);
    }

    renderEditable() {
      const li = document.createElement('li');

      const input = document.createElement('input');
      input.value = this.text;
      input.addEventListener('input', this.inputText);

      const buttonSave = document.createElement('button');
      buttonSave.innerText = 'Save';
      buttonSave.addEventListener('click', this.validate);

      const buttonCancel = document.createElement('button');
      buttonCancel.innerText = 'Cancel';
      buttonCancel.addEventListener('click', this.cancelLi);

      li.append(input, this.alertSpan, buttonSave, buttonCancel);
      return li;
    }

    renderRidable() {
      const li = document.createElement('li');

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.checked = this.checked;
      input.addEventListener('change', this.checkedLi);

      const span = document.createElement('span');
      span.innerText = this.text;

      const buttonEdit = document.createElement('button');
      buttonEdit.innerText = 'Edit';
      buttonEdit.addEventListener('click', this.editLi);

      const buttonRemove = document.createElement('button');
      buttonRemove.innerText = 'Remove';
      buttonRemove.addEventListener('click', this.removeLi);

      li.append(input, span, buttonEdit, buttonRemove);
      return li;
    }

    render() {
      if(this.editable){
        return this.renderEditable();
      }else{
        return this.renderRidable();
      }
    }
}

export default LiItem;