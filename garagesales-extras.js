// ==UserScript==
// @name                Garage Sales Extras
// @description	        Searches for "close", "closed", and "sold" in the Garage Sales subforum and tag the thread with "CLOSED" and "SOLD" tag
// @include		https://forum.lowyat.net/*
// @include		https://www.forum.lowyat.net/*
// ==/UserScript==

if($('div#navstrip').text().search(/Garage Sales/)){
	setInterval(function(){ 
		base = $('tr>td.row1')
		threads = base.find('div.topic_title').each(function(thread_index){
			$(this).find('a').each(function(href_index) {
				var text = $(this).text()

				if((text.search(/close/i) != -1) ^ (text.search(/closed/i) != -1))
				{
					if($('tr').find('td[valign="middle"]').eq(thread_index).find('span#closed').length != 1){
						$('tr').find('td[valign="middle"]').eq(thread_index).prepend("<span id='closed' class='topic_prefix TAG' style='background-color:red'>CLOSED1</span>");
					}
				}

				if(text.search(/sold/i) != -1){
					if($('tr').find('td[valign="middle"]').eq(thread_index).find('span#sold').length != 1){
						$('tr').find('td[valign="middle"]').eq(thread_index).prepend("<span id='sold' class='topic_prefix TAG' style='background-color:yellow'>SOLD1</span>");
					}
				}
			});
		});

		base.find('span.topic_desc').each(function( index ) {
			var text = $(this).text()

			if((text.search(/close/i) != -1) ^ (text.search(/closed/i) != -1))
			{
				if($('tr').find('td[valign="middle"]').eq(index).find('span#closed').length != 1){
					$('tr').find('td[valign="middle"]').eq(index).prepend("<span id='closed' class='topic_prefix TAG' style='background-color:red'>CLOSED1</span>");
				}
			}

			if(text.search(/sold/i) != -1){
				if($('tr').find('td[valign="middle"]').eq(index).find('span#sold').length != 1){
					$('tr').find('td[valign="middle"]').eq(index).prepend("<span id='sold' class='topic_prefix TAG' style='background-color:yellow'>SOLD2</span>");
				}
			}
		});
	}, 500);
}