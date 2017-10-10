(function() {
  function p(a) {
    var b, g = a.width, h = a.height;
    if ('toDataURL' === a.method) {
      b = document.createElement('img'), b.src = a.dataURL;
    } else {
      if ('getImageData' === a.method) {
        var c = document.createElement('canvas');
        c.width = g;
        c.height = h;
        var e = c.getContext('2d');
        b = a.args;
        var d = b[0], f = b[1], q = b[2], k = b[3], l = new Image;
        l.onload = function() {
          function a(b) {
            e.clearRect(0, 0, g, h);
            e.drawImage(l, 0, 0);
            b && (e.strokeStyle = 'black', e.lineWidth = 1, e.rect(d - .5, f - .5, .5 + q + .5, .5 + k + .5), e.stroke());
          }
          a(!1);
          c.addEventListener('mouseenter', function() {
            a(!0);
          });
          c.addEventListener('mouseleave', function() {
            a(!1);
          });
        };
        l.src = a.dataURL;
        b = c;
      }
    }
    return b;
  }
  var r = function() {
    var a = document.createElement('a');
    return function(b) {
      a.href = b;
      return a.protocol + '//' + a.hostname;
    };
  }(), m = parseInt(location.hash.substring(1), 10), n = chrome.extension.getBackgroundPage().blocksByTabId[m], s = document.getElementById('list'), t = document.getElementById('subtitle');
  document.getElementById('donate-anchor').addEventListener('click', function() {
    chrome.tabs.get(m, function(a) {
      chrome.tabs.create({url:'https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=canvas%2efingerprint%2eblock%40gmail%2ecom&lc=MT&item_name=Support%20development%20of%20CanvasFingerprintBlock%20Chrome%20extension&item_number=popup&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donate_LG%2egif%3aNonHosted', index:a.index + 1});
    });
  });
  var k = n.length;
  t.innerHTML = 1 === k ? 'Blocked <span class=amount>' + k + '</span> potential HTML canvas fingerprinting attempt on this page' : 'Blocked <span class=amount>' + k + '</span> potential HTML canvas fingerprinting attempts on this page';
  n.forEach(function(a) {
    var b = r(a.url), g = a.width, h = a.height, c = a.args, e = a.method, d = g + 'px\u00a0\u00d7\u00a0' + h + 'px';
    a = p(a);
    a.title = d;
    var f;
    if ('toDataURL' === e) {
      f = 'Prevented a script on ' + b + ' from capturing the following ' + d + ' canvas (via toDataURL):';
    } else {
      if ('getImageData' === e && 0 === c[0] && 0 === c[1] && c[2] === g && c[3] === h) {
        f = 'Prevented a script on ' + b + ' from capturing the following ' + d + ' canvas (via getImageData):';
      } else {
        if ('getImageData' === e) {
          f = c[0];
          var g = c[1], h = c[2], c = c[3], e = f + h - 1, k = g + c - 1;
          f = 'Prevented a script on ' + b + ' from capturing ' + (1 === h && 1 === c ? 'the point (' + f + ',\u00a0' + g + ') on the following ' + d + ' canvas' : 1 === h || 1 === c ? 'the strip from (' + f + ',\u00a0' + g + ') to (' + e + ',\u00a0' + k + ') of the following ' + d + ' canvas' : 'the rectangular area between (' + f + ',\u00a0' + g + ') and (' + e + ',\u00a0' + k + ') of the following ' + d + ' canvas') + ' (via getImageData):';
        }
      }
    }
    b = document.createElement('li');
    d = document.createElement('div');
    d.textContent = f;
    b.appendChild(d);
    d = document.createElement('div');
    d.className = 'img-container';
    d.appendChild(a);
    b.appendChild(d);
    s.appendChild(b);
  });
})();

