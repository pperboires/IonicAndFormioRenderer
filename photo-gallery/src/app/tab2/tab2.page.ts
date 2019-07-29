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
          "label": "Domain Select",
          "key": "domainSelect",
          "placeholder": "",
          "data": {
            "values": [],
            "json": "",
            "url": "",
            "resource": "",
            "custom": ""
          },
          "dataSrc": "worker",
          "valueProperty": "",
          "defaultValue": "",
          "refreshOn": "",
          "filter": "",
          "authenticate": false,
          "template": "<span>{{ item.name }}</span>",
          "multiple": false,
          "protected": false,
          "unique": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "validate": {
            "required": false
          },
          "type": "domainselect",
          "$$hashKey": "object:146",
          "labelPosition": "top",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {}
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "label": "Text Area",
          "key": "textArea",
          "placeholder": "",
          "prefix": "",
          "suffix": "",
          "rows": 3,
          "multiple": false,
          "defaultValue": "",
          "protected": false,
          "persistent": true,
          "hidden": false,
          "wysiwyg": false,
          "clearOnHide": true,
          "spellcheck": true,
          "validate": {
            "required": false,
            "minLength": "",
            "maxLength": "",
            "pattern": "",
            "custom": ""
          },
          "type": "textarea",
          "$$hashKey": "object:249",
          "labelPosition": "top",
          "inputFormat": "plain",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {}
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": false,
          "inputType": "password",
          "label": "Password",
          "key": "password",
          "placeholder": "",
          "prefix": "",
          "suffix": "",
          "protected": true,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "type": "password",
          "$$hashKey": "object:364",
          "labelPosition": "top",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {}
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "inputType": "text",
          "inputMask": "",
          "label": "Text",
          "key": "text",
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
          "$$hashKey": "object:456"
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "inputType": "number",
          "label": "Number",
          "key": "number",
          "placeholder": "",
          "prefix": "",
          "suffix": "",
          "defaultValue": "",
          "protected": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "validate": {
            "required": false,
            "min": "",
            "max": "",
            "step": "any",
            "integer": "",
            "multiple": "",
            "custom": ""
          },
          "type": "number",
          "$$hashKey": "object:513",
          "labelPosition": "top",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {}
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "label": "Select",
          "key": "select",
          "placeholder": "",
          "data": {
            "values": [
              {
                "value": "teste1",
                "label": "Teste 1",
                "$$hashKey": "object:881"
              },
              {
                "value": "teste2",
                "label": "Teste 2",
                "$$hashKey": "object:885"
              },
              {
                "value": "teste3",
                "label": "Teste 3",
                "$$hashKey": "object:889"
              },
              {
                "value": "",
                "label": "",
                "$$hashKey": "object:893"
              }
            ],
            "json": "",
            "url": "",
            "resource": "",
            "custom": ""
          },
          "dataSrc": "values",
          "valueProperty": "",
          "defaultValue": "",
          "refreshOn": "",
          "filter": "",
          "authenticate": false,
          "template": "<span>{{ item.label }}</span>",
          "multiple": false,
          "protected": false,
          "unique": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "validate": {
            "required": false
          },
          "type": "select",
          "$$hashKey": "object:776",
          "labelPosition": "top",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {}
        },
        {
          "clearOnHide": false,
          "label": "Columns",
          "input": false,
          "tableView": false,
          "key": "columns",
          "columns": [
            {
              "components": [
                {
                  "autofocus": false,
                  "input": true,
                  "tableView": true,
                  "inputType": "text",
                  "inputMask": "",
                  "label": "Text",
                  "key": "columnsText",
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
                  "$$hashKey": "object:1827"
                }
              ],
              "width": 6,
              "offset": 0,
              "push": 0,
              "pull": 0,
              "$$hashKey": "object:1753"
            },
            {
              "components": [
                {
                  "autofocus": false,
                  "input": true,
                  "tableView": true,
                  "inputType": "number",
                  "label": "Number",
                  "key": "columnsNumber",
                  "placeholder": "",
                  "prefix": "",
                  "suffix": "",
                  "defaultValue": "",
                  "protected": false,
                  "persistent": true,
                  "hidden": false,
                  "clearOnHide": true,
                  "validate": {
                    "required": false,
                    "min": "",
                    "max": "",
                    "step": "any",
                    "integer": "",
                    "multiple": "",
                    "custom": ""
                  },
                  "type": "number",
                  "$$hashKey": "object:1887",
                  "labelPosition": "top",
                  "tags": [],
                  "conditional": {
                    "show": "",
                    "when": null,
                    "eq": ""
                  },
                  "properties": {}
                }
              ],
              "width": 6,
              "offset": 0,
              "push": 0,
              "pull": 0,
              "$$hashKey": "object:1754"
            }
          ],
          "type": "columns",
          "$$hashKey": "object:1747",
          "hideLabel": true,
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {}
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "label": "file",
          "key": "file",
          "image": false,
          "imageSize": "200",
          "placeholder": "",
          "multiple": false,
          "defaultValue": "",
          "protected": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "filePattern": "*",
          "fileMinSize": "0KB",
          "fileMaxSize": "1GB",
          "type": "file",
          "$$hashKey": "object:1456",
          "labelPosition": "top",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {},
          "hideLabel": true
        },
        {
          "input": true,
          "tableView": true,
          "label": "Survey",
          "key": "survey",
          "questions": [
            {
              "value": "conteudo",
              "label": "Conteúdo",
              "$$hashKey": "object:1675"
            },
            {
              "value": "tempo",
              "label": "Tempo",
              "$$hashKey": "object:1682"
            },
            {
              "value": "aulas",
              "label": "Aulas",
              "$$hashKey": "object:1709"
            },
            {
              "value": "material",
              "label": "Material",
              "$$hashKey": "object:1721"
            }
          ],
          "values": [
            {
              "value": "ruim",
              "label": "Ruim"
            },
            {
              "value": "regular",
              "label": "Regular"
            },
            {
              "value": "bom",
              "label": "Bom"
            },
            {
              "value": "otimo",
              "label": "Ótimo"
            }
          ],
          "defaultValue": "",
          "protected": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "validate": {
            "required": false,
            "custom": "",
            "customPrivate": false
          },
          "type": "survey",
          "$$hashKey": "object:1575",
          "labelPosition": "top",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {}
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "label": "Date Time",
          "key": "dateTime",
          "placeholder": "",
          "format": "yyyy-MM-dd hh:mm a",
          "enableDate": true,
          "enableTime": true,
          "defaultDate": "",
          "datepickerMode": "day",
          "datePicker": {
            "showWeeks": true,
            "startingDay": 0,
            "initDate": "",
            "minMode": "day",
            "maxMode": "year",
            "yearRows": 4,
            "yearColumns": 5,
            "minDate": null,
            "maxDate": null,
            "datepickerMode": "day"
          },
          "timePicker": {
            "hourStep": 1,
            "minuteStep": 1,
            "showMeridian": true,
            "readonlyInput": false,
            "mousewheel": true,
            "arrowkeys": true
          },
          "protected": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "validate": {
            "required": false,
            "custom": ""
          },
          "type": "datetime",
          "$$hashKey": "object:980",
          "labelPosition": "top",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {}
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "label": "Address",
          "key": "address",
          "placeholder": "",
          "multiple": false,
          "protected": false,
          "clearOnHide": true,
          "unique": false,
          "persistent": true,
          "hidden": false,
          "map": {
            "region": "",
            "key": ""
          },
          "validate": {
            "required": false
          },
          "type": "address",
          "$$hashKey": "object:1353",
          "labelPosition": "top",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {}
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "inputType": "email",
          "label": "Email",
          "key": "email",
          "placeholder": "",
          "prefix": "",
          "suffix": "",
          "defaultValue": "",
          "protected": false,
          "unique": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "kickbox": {
            "enabled": false
          },
          "type": "email",
          "$$hashKey": "object:1104",
          "inputFormat": "plain",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {}
        },
        {
          "autofocus": false,
          "input": true,
          "tableView": true,
          "inputType": "tel",
          "inputMask": "(999) 999-9999",
          "label": "Phone Number",
          "key": "phoneNumber",
          "placeholder": "",
          "prefix": "",
          "suffix": "",
          "multiple": false,
          "protected": false,
          "unique": false,
          "persistent": true,
          "hidden": false,
          "defaultValue": "",
          "clearOnHide": true,
          "validate": {
            "required": false
          },
          "type": "phoneNumber",
          "$$hashKey": "object:1226",
          "labelPosition": "top",
          "inputFormat": "plain",
          "tags": [],
          "conditional": {
            "show": "",
            "when": null,
            "eq": ""
          },
          "properties": {}
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
