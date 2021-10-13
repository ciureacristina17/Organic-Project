$(function() {

    countDown.init();
    for (var i = 0; i < countDown.validElements.length; i++) {
        countDown.changeTime(countDown.validElements[i], countDown.endDate[i], i);
    };
    setInterval(function() {
        for (var i = 0; i < countDown.validElements.length; i++) {
            countDown.changeTime(countDown.validElements[i], countDown.endDate[i], i);
        };
    }, 1000);
});

var countDown = {
    endDate: [],
    validElements: [],
    display: [],
    initialHeight: undefined,
    initialInnerDivMarginTop: undefined,
    originalBorderTopStyle: undefined,

    init: function(element, number) {
        $('.countDown').each(function(index) {
            var regex_match = $(this).text().match(/([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2})/);
            countDown.validElements.push($(this));
            var end = new Date(regex_match[3], regex_match[2] - 1, regex_match[1], regex_match[4], regex_match[5], regex_match[6]);

            if (end > new Date()) {
                countDown.endDate.push(end);
                countDown.changeTime($(this), end, index);
                $(this).html("");

                for (var i = 0; i < countDown.display.next.length; i++) {

                    if (i == countDown.display.next.length - 1) {
                        $(this).append("<div class='container'><div class='a'><div>" + countDown.display.next[i]);
                    } else {
                        $(this).append("<div class='container'><div class='a'><div>" + countDown.display.next[i]);
                    }
                }

            } else {
                $(this).html("<p class='end'>Der Countdown ist bereits abgelaufen.</p>");
            }
        });
    },

    reset: function(element, number) {
        var element1 = element.find('div.a');
    },

    changeTime: function(element, endTime, elementIndex) {
        if (typeof endTime !== 'undefined') {
            var today = new Date();

            if (today.getTime() <= endTime.getTime()) {
                today = new Date();
                countDown.display = {
                    'last': [],
                    'next': []
                };

                var seconds = Math.floor((endTime.getTime() - today.getTime()) / 1000) + 1;
                countDown.display.last = countDown.calcTime(seconds);
                seconds = Math.floor((endTime.getTime() - today.getTime()) / 1000);
                countDown.display.next = countDown.calcTime(seconds);

                for (var i = 0; i < countDown.display.next.length; i++) {
                    if (countDown.display.next[i].toString().length == 1) {
                        countDown.display.next[i] = '0' + countDown.display.next[i];
                    }

                    if (countDown.display.last[i].toString().length == 1) {
                        countDown.display.last[i] = '0' + countDown.display.last[i];
                    }

                    $(element.find('div.container div.a div')[i]).text(countDown.display.last[i]);
                    countDown.reset(element.find('div.container'));
                }
            } else {
                element.html("<p class='end'>Der Countdown ist bereits abgelaufen.</p>");
            }
        }
    },

    calcTime: function(seconds) {
        var array = [];
        array[0] = Math.floor(seconds / 86400);
        seconds -= array[0] * 86400;
        array[1] = Math.floor(seconds / 3600);
        seconds -= array[1] * 3600;
        array[2] = Math.floor(seconds / 60);
        seconds -= array[2] * 60;
        array[3] = seconds;
        return [array[0], array[1], array[2], array[3]];
    }
}