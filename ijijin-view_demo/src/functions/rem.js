/**
* 页面rem单位设置
* @module rem
* @desc 单位1rem = 75px(mobile)；1rem = 54px(pc)。（当window.norem存在时，则不设置rem单位）
* @alias window.flexible
* @property {Number} dpr 设备屏幕分辨率
* @property {Number} rem rem比例
*/

let rem_rate = 1;

~(function (win) {
	if (window.norem) return false;		// no rem set
	
    let doc = win.document;
    let docEl = doc.documentElement;
    let dpr = 1;
    let tid;

    let flexible = {};

    /**
     * @function refreshRem
     * @description **window.flexible.refreshRem()**。重新根据屏幕调整rem
     * @example
     * window.flexible.refreshRem();
     */
    function refreshRem () {
        let width = docEl.getBoundingClientRect().width;
        width = width > 540 ? 540 : width;
        
        let rem = width / 10 * rem_rate;
        docEl.style.fontSize = rem + 'px';
        flexible.rem = win.rem = rem;
		flexible.oriRem = win.oriRem = width / 10;
    }

    win.addEventListener('resize', function () {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    if (doc.readyState === 'complete') {
        refreshRem();
    } else {
        doc.addEventListener('DOMContentLoaded', function () {
            refreshRem();
        }, false);
    }
      
    refreshRem();

    flexible.dpr = dpr;
    flexible.refreshRem = refreshRem;

    win.flexible = flexible;
}) (window);