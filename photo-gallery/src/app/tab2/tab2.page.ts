import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  implements OnInit {

  constructor() {}

  
  public form : any;
  public formJson: string;
  public triggerRefresh: any;

  public ngOnInit() {

    this.form = 
    {
      "components": [
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "inputType": "text",
          "inputMask": "",
          "label": "Nome",
          "key": "nome",
          "placeholder": "",
          "prefix": "",
          "suffix": "",
          "multiple": false,
          "defaultValue": "",
          "protected": false,
          "unique": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "spellcheck": true,
          "validate": {
            "required": false,
            "minLength": "",
            "maxLength": "",
            "pattern": "",
            "custom": "",
            "customPrivate": false
          },
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "type": "textfield",
          "$$hashKey": "object:195"
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "inputType": "text",
          "inputMask": "",
          "label": "Sobrenome",
          "key": "sobrenome",
          "placeholder": "",
          "prefix": "",
          "suffix": "",
          "multiple": false,
          "defaultValue": "",
          "protected": false,
          "unique": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "spellcheck": true,
          "validate": {
            "required": false,
            "minLength": "",
            "maxLength": "",
            "pattern": "",
            "custom": "",
            "customPrivate": false
          },
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "type": "textfield",
          "$$hashKey": "object:244"
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "label": "Data de nascimento",
          "key": "datadenascimento",
          "fields": {
            "day": {
              "type": "number",
              "placeholder": "",
              "required": false
            },
            "month": {
              "type": "select",
              "placeholder": "",
              "required": false
            },
            "year": {
              "type": "number",
              "placeholder": "",
              "required": false
            }
          },
          "dayFirst": true,
          "protected": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "validate": {
            "custom": ""
          },
          "type": "day",
          "labelPosition": "top",
          "inputsLabelPosition": "top",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {},
          "$$hashKey": "object:564",
          "useLocaleSettings": false
        },
        {
          "input": true,
          "tableView": true,
          "label": "Signature",
          "key": "signature",
          "placeholder": "",
          "footer": "Assinatura",
          "width": "100%",
          "height": "150px",
          "penColor": "black",
          "backgroundColor": "rgb(245,245,235)",
          "minWidth": "0.5",
          "maxWidth": "2.5",
          "protected": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "validate": {
            "required": false
          },
          "type": "signature",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {},
          "$$hashKey": "object:822",
          "hideLabel": true
        },
        {
          "autofocus": false,
          "input": true,
          "label": "Submit",
          "tableView": false,
          "key": "submit",
          "size": "md",
          "leftIcon": "",
          "rightIcon": "",
          "block": false,
          "action": "submit",
          "disableOnInvalid": false,
          "theme": "primary",
          "type": "button",
          "$$hashKey": "object:16"
        }
      ],
      "display": "form",
      "page": 0
    };

    this.formJson = JSON.stringify(this.form);
  
    this.triggerRefresh = new EventEmitter();
  }

  private changeForm () {
    this.triggerRefresh.emit({
      property: 'form',
      value: JSON.parse(this.formJson)
    });
  }

  public onSubmit(submission: any) {
    console.log(submission); // This will print out the full submission from Form.io API.
  }

  public onChange() {
    this.changeForm();
  }

}
