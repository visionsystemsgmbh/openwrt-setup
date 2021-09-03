'use strict';
'require fs';
'require rpc';
'require uci';

var callSystemBoard = rpc.declare({
	object: 'system',
	method: 'board'
});

var callSystemInfo = rpc.declare({
	object: 'system',
	method: 'info'
});

return L.Class.extend({
	title: _('Hardware'),

	load: function() {
		return Promise.all([
			uci.load("onrisc"),
			fs.lines("/etc/vsversion")
		]);
	},

	render: function(data) {

		var fields = [
			_('Hardware Revision'),         uci.get("onrisc","OnRISC","HwRev"),
			_('Firmware Revision'),         data[1],
			_('Serial Number'),            uci.get("onrisc","OnRISC","SerialNumber"),
			_('Production Date'),     uci.get("onrisc","OnRISC","PrdDate")
		];

		var table = E('div', { 'class': 'table' });

		for (var i = 0; i < fields.length; i += 2) {
			table.appendChild(E('div', { 'class': 'tr' }, [
				E('div', { 'class': 'td left', 'width': '33%' }, [ fields[i] ]),
				E('div', { 'class': 'td left' }, [ (fields[i + 1] != null) ? fields[i + 1] : '?' ])
			]));
		}

		return table;
	}
});
