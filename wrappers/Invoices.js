/**
 * Copyright Mind Powered Corporation 2020
 * 
 * https://mindpowered.dev/
 */

const maglev = require('@mindpowered/maglev');
const invoices = require('../lib/invoices.js');

/**
 * An Library for Creating Invoices
 */
class Invoices {
	constructor() {
		let bus = maglev.maglev.MagLev.getInstance('default');
		let lib = new invoices.invoices.Invoices(bus);
	}

	/**
	 * Create a new invoice
	 * @param {string} clientId 
	 * @param {string} invoiceNumber 
	 * @param {string} date 
	 * @param {string} dueDate 
	 * @param {string} notes 
	 * @return {Promise} New invoice id Promise will resolve to type string.
	*/
	CreateInvoice(clientId, invoiceNumber, date, dueDate, notes) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [clientId, invoiceNumber, date, dueDate, notes];
		let ret = jsbus.call('Invoices.CreateInvoice', args);
		return ret;
	}

	/**
	 * Delete an invoice
	 * @param {string} invoiceId 
	*/
	DeleteInvoice(invoiceId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [invoiceId];
		jsbus.call('Invoices.DeleteInvoice', args);
	}

	/**
	 * 
	 * @param {string} invoiceId 
	 * @param {string} clientId 
	 * @param {string} invoiceNumber 
	 * @param {string} date 
	 * @param {string} dueDate 
	 * @param {string} notes 
	*/
	ChangeInvoice(invoiceId, clientId, invoiceNumber, date, dueDate, notes) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [invoiceId, clientId, invoiceNumber, date, dueDate, notes];
		jsbus.call('Invoices.ChangeInvoice', args);
	}

	/**
	 * 
	 * @param {string} invoiceId 
	 * @return {Promise}  Promise will resolve to type object.
	*/
	GetInvoiceSummary(invoiceId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [invoiceId];
		let ret = jsbus.call('Invoices.GetInvoiceSummary', args);
		return ret;
	}

	/**
	 * 
	 * @param {string} invoiceId 
	 * @return {Promise} Line items for invoice Promise will resolve to type array.
	*/
	GetLineItems(invoiceId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [invoiceId];
		let ret = jsbus.call('Invoices.GetLineItems', args);
		return ret;
	}

	/**
	 * 
	 * @param {string} invoiceId 
	 * @param {string} accountId 
	 * @param {string} description 
	 * @param {object} taxes 
	 * @param {number} quantity 
	 * @param {number} price 
	 * @return {Promise} lineNumber Promise will resolve to type number.
	*/
	AddLineItem(invoiceId, accountId, description, taxes, quantity, price) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [invoiceId, accountId, description, taxes, quantity, price];
		let ret = jsbus.call('Invoices.AddLineItem', args);
		return ret;
	}

	/**
	 * 
	 * @param {string} invoiceId 
	 * @param {number} lineNumber 
	 * @param {string} accountId 
	 * @param {string} description 
	 * @param {object} taxes 
	 * @param {number} quantity 
	 * @param {number} price 
	*/
	ChangeLineItem(invoiceId, lineNumber, accountId, description, taxes, quantity, price) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [invoiceId, lineNumber, accountId, description, taxes, quantity, price];
		jsbus.call('Invoices.ChangeLineItem', args);
	}

	/**
	 * 
	 * @param {string} invoiceId 
	 * @param {number} lineNumber 
	*/
	RemoveLineItem(invoiceId, lineNumber) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [invoiceId, lineNumber];
		jsbus.call('Invoices.RemoveLineItem', args);
	}

	/**
	 * 
	 * @param {string} clientId 
	 * @return {Promise}  Promise will resolve to type array.
	*/
	GetInvoicesByClient(clientId) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [clientId];
		let ret = jsbus.call('Invoices.GetInvoicesByClient', args);
		return ret;
	}

	/**
	 * 
	 * @param {number} page 
	 * @param {number} perpage 
	 * @return {Promise}  Promise will resolve to type array.
	*/
	GetAllInvoices(page, perpage) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [page, perpage];
		let ret = jsbus.call('Invoices.GetAllInvoices', args);
		return ret;
	}

	/**
	 * Returns the Invoice ID or null
	 * @param {string} invoiceNumber 
	 * @return {Promise}  Promise will resolve to type mixed.
	*/
	FindInvoiceByNumber(invoiceNumber) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [invoiceNumber];
		let ret = jsbus.call('Invoices.FindInvoiceByNumber', args);
		return ret;
	}

}
module.exports = Invoices;

