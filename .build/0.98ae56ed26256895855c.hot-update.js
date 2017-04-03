webpackHotUpdate(0,{

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(60);

var _reactBootstrap = __webpack_require__(30);

var _actions = __webpack_require__(103);

var _actions2 = _interopRequireDefault(_actions);

var _webUtil = __webpack_require__(104);

var _notificationUtil = __webpack_require__(169);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PublicLibraryPage = (_dec = (0, _reactRedux.connect)(function (state) {
	return state;
}), _dec(_class = function (_React$Component) {
	_inherits(PublicLibraryPage, _React$Component);

	function PublicLibraryPage() {
		_classCallCheck(this, PublicLibraryPage);

		return _possibleConstructorReturn(this, (PublicLibraryPage.__proto__ || Object.getPrototypeOf(PublicLibraryPage)).apply(this, arguments));
	}

	_createClass(PublicLibraryPage, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			$(_reactDom2.default.findDOMNode(this.publicDocumentList)).dataTable({
				// responsive: true,
				// stateSave: true,
				// paging: true,
				// searching: true,
				// order: [ 0, 'asc' ],
				// columnDefs: [
				//  	// {searchable: false, targets: 0},
				//  	// {visible: false, targets: 0},
				//  	// {orderable: false, targets: 1},
				//  	// {searchable: false, targets: 1},
				// ],
			});
		}
	}, {
		key: 'handleSaveLibrary',
		value: function handleSaveLibrary(document) {
			this.props.dispatch(_actions2.default.addDocumentPersonal(document));
			(0, _webUtil.redirect)('/my_library');
			(0, _notificationUtil.publishNoti)('info', 'Successfully added document to your personal library!');
		}
	}, {
		key: 'renderTableHeader',
		value: function renderTableHeader() {
			return _react2.default.createElement(
				'thead',
				null,
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'th',
						null,
						'Name'
					),
					_react2.default.createElement(
						'th',
						null,
						'Language'
					),
					_react2.default.createElement('th', null)
				)
			);
		}
	}, {
		key: 'renderTableBody',
		value: function renderTableBody(list) {
			var _this2 = this;

			return _react2.default.createElement(
				'tbody',
				null,
				list.map(function (record, idx) {
					return _this2.renderTableRow(record, idx);
				})
			);
		}
	}, {
		key: 'renderTableRow',
		value: function renderTableRow(record, idx) {
			var _this3 = this;

			return _react2.default.createElement(
				'tr',
				{ key: 'my-library-row-' + idx },
				_react2.default.createElement(
					'td',
					null,
					record.name
				),
				_react2.default.createElement(
					'td',
					null,
					record.lang
				),
				_react2.default.createElement(
					'td',
					null,
					_react2.default.createElement('a', { id: 'download-link-' + record.link, href: '' + record.link, download: true }),
					_react2.default.createElement(
						_reactBootstrap.Button,
						{
							bsSize: 'sm',
							bsStyle: 'info',
							onClick: function onClick() {
								return document.getElementById('download-link-' + record.link).click();
							}
						},
						'Download'
					),
					'\u2003',
					_react2.default.createElement(
						_reactBootstrap.Button,
						{
							bsSize: 'sm',
							bsStyle: 'info',
							onClick: function onClick() {
								return _this3.handleSaveLibrary.call(_this3, record);
							}
						},
						'Add to my library'
					)
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var list = this.props.publicLib.documentList;
			return _react2.default.createElement(
				'div',
				{ id: 'my-library-container' },
				_react2.default.createElement(
					_reactBootstrap.Grid,
					null,
					_react2.default.createElement(
						'table',
						{ ref: function ref(c) {
								return _this4.publicDocumentList = c;
							}, className: 'display', cellSpacing: '0', width: '100%' },
						this.renderTableHeader(),
						this.renderTableBody(list)
					)
				)
			);
		}
	}]);

	return PublicLibraryPage;
}(_react2.default.Component)) || _class);
exports.default = PublicLibraryPage;

/***/ })

})