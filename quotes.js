

// 0352ff7299msh43077480e8043c9p18689ejsn933c8cc390b4
$(document).ready(function ()
{
  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://type.fit/api/quotes",
    "method": "GET"
  }

  $.ajax(settings).done(function (response)
  {
    const data = JSON.parse(response);
    console.log(data);
  });

  var test = $("#1test");