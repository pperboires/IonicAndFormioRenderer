import BaseComponent from 'formiojs/components/base/Base';
import Components from 'formiojs/components/Components';
import _ from 'lodash';

import SelectComponent from 'formiojs/components/select/Select';
import Webform from 'formiojs/Webform';
import Formio from 'formiojs/Formio';

import DomainSelectForm from './DomainSelectForm';

export default class DomainSelectComponent extends SelectComponent {
  static schema(...extend) {
    return SelectComponent.schema({
      type: 'domainselect',
      label: 'Domain Select',
      key: 'domainselect',
      dataSrc: null,      
      template: '<span>{{ item.name }}</span>'
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Domain Select',
      group: 'basic',
      icon: 'fa fa-files-o',
      weight: 90,
      documentation: 'http://help.form.io/userguide/#resource',
      schema: DomainSelectComponent.schema()
    };
  }

  constructor(component, options, data) {
    super(component, options, data);
  }

  get defaultSchema() {
    return DomainSelectComponent.schema();
  }

  /**
   * Creates a new button to add a resource instance
   * @returns {HTMLElement} - The "Add Resource" button html element.
   */
  addButton() {
    const addButton = this.ce('button', {
      class: 'btn btn-primary'
    });
    const addIcon   = this.ce('i', {
      class: this.iconClass('plus')
    });
    addButton.appendChild(addIcon);
    addButton.appendChild(this.text(' '));
    addButton.appendChild(this.text(this.component.addResourceLabel || 'Add Resource'));

    this.addEventListener(addButton, 'click', (event) => {
      event.preventDefault();
      const dialog = this.createModal(this.component.addResourceLabel || 'Add Resource');
      const formioForm = this.ce('div');
      dialog.body.appendChild(formioForm);
      const form = new Webform(formioForm);
      form.on('submit', (submission) => {
        if (this.component.multiple) {
          submission = [...this.dataValue, submission];
        }
        this.setValue(submission);
        form.destroy();
        dialog.close();
      });
      form.src = `${_.get(this.root, 'formio.projectUrl', Formio.getBaseUrl())}/form/${this.component.resource}`;
    });

    return addButton;
  }

  addInput(input, container) {
    // Add Resource button
    if (this.component.addResource) {
      const table    = this.ce('table', {
        class: 'table table-bordered'
      });
      const template = '<tbody>' +
                       '<tr>' +
                         '<td id="select">' +
                         '</td>' +
                       '</tr>' +
                       '<tr>' +
                         '<td id="button" colspan="2">' +
                         '</td>' +
                       '</tr>' +
                     '</tbody>';
      container.appendChild(table);
      table.innerHTML = template;
      table.querySelector('#button').appendChild(this.addButton());
      super.addInput(input, table.querySelector('#select'));
    }
    else {
      super.addInput(input, container);
    }
  }


  updateItems(searchInput, forceUpdate) {
    if (!this.component.dataSrc) {
      console.warn(`Select component ${this.key} does not have data configuration.`);
      this.itemsLoadedResolve();
      return;
    }

    // Only load the data if it is visible.
    if (!this.checkConditions()) {
      this.itemsLoadedResolve();
      return;
    }

    if (!forceUpdate && !this.active) {
      // If we are lazyLoading, wait until activated.
      return;
    }

    let method = 'GET';
    let body = null;

    let baseUrl = 'http://localhost:8001';

    let url =  baseUrl + '/api/v2/DomainSelect?type='+this.component.dataSrc;

    const options = this.component.authenticate ? {} : { noToken: true };
    this.loadItems(url, searchInput, this.requestHeaders, options, method, body);
      
  }
}


// Use the table component edit form.
DomainSelectComponent.editForm = DomainSelectForm;

// Register the component to the Formio.Components registry.
Components.addComponent('domainselect', DomainSelectComponent);
