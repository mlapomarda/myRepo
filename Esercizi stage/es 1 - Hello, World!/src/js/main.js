let $ = require("jquery");
let Mustache = require('mustache');

const bindEvents = () => {
  $('#clear').on('mouseenter', () => {
    $('#clear').css({
      'color': '#CCCCCC',
      'cursor': 'pointer',
      'text-decoration': 'underline'
    });
  });

  $('#clear').on('mouseleave', () => {
    $('#clear').css({
      'color': '#1D71DF',
      'cursor': 'pointer',
      'text-decoration': 'unset'
    });
  });

  $('#clear').on('click', () => {
    $('.policy').fadeOut();
  });

  $('#submit').on('click', () => {
    let id = $('#id').val();
    let title = $('#title').val();
    let img = $('#img').val();
    let descr = $('#descr').val();
    $.ajax({
      type:'post',
      url:'/articles',
      data:{id: id, title: title, img: img, descr: descr},
      dataType:'json'
    }).done((data) => {
      console.log(data);
    })
  });
}

const getArticle = () => {
  $.ajax({
    type:'get',
    url:'/articles'
  }).done((data)=>{
    loadArticle(data);
  });
}

const loadArticle = data => {
  var template = $('#template').html();
  Mustache.parse(template);
  var rendered = Mustache.render(template, data);
  $('#dinamic-art').html(rendered);
}

$(document).ready( () => {
  bindEvents();
  getArticle();
});
