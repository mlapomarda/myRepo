const $ = require("jquery");
const Mustache = require('mustache');


const bindEvents = () => {
    $('#modify').on('click', () => {
    $('.content-shop').slideUp();
    $('.content-finishPrenot').slideUp();
    $('.get-details').slideUp();
    $('.header-type').css({'background-color': '#57a2ec'});
    $('#blue-arrow-down-1').show();
    $('#blue-arrow-down-2').hide();
    $('#blue-arrow-down-3').hide();
    $('.header-shop').css({'background-color': '#0060ae'});
    $('.header-finishPrenot').css({'background-color': '#0060ae'});
  });

  $('.header-shop').on('click', () => {
    $('.content-shop').slideDown();
    $('.content-finishPrenot').slideUp();
    $('.header-shop').css({'background-color': '#57a2ec'});
    $('.header-type').css({'background-color': '#0060ae'});
    $('.header-finishPrenot').css({
      'background-color': '#0060ae',
      'border-bottom': '1px solid #cccccc'
    });
    $('#blue-arrow-down-1').hide();
    $('#blue-arrow-down-2').show();
    $('#blue-arrow-down-3').hide();
  });

  $('.custom-select').on('click', () => {
    $('.select-menu').slideToggle();
  });

  $('.select-option').mouseenter( (e) => {
    /*$('.select-option')*/$(e.currentTarget).css({'background-color': '#f0eef4'});
  });
  $('.select-option').mouseleave( () => {
    $('.select-option').css({'background-color': '#ffffff'});
  });

  $('.select-option').on('click', (e) => {
    $('#par').html($(e.currentTarget).html());
    getDetails();
    $('.get-details').show();
  });

  $('.header-type').on('click', () => {
    $('.content-type').slideDown();
    $('.header-shop').css({'background-color': '#0060ae'});
    $('.header-type').css({'background-color': '#57a2ec'});
    $('.header-finishPrenot').css({
      'background-color': '#0060ae',
      'border-bottom': '1px solid #cccccc'
    });
    $('.content-finishPrenot').slideUp();
    $('#blue-arrow-down-1').show();
    $('#blue-arrow-down-2').hide();
    $('#blue-arrow-down-3').hide();
  });

}

const bindCircle = () => {
  $('.circle').on('click', (e) => {
    $('.content-shop').slideUp();
    $('.get-details').slideUp();
    $('.content-type').slideUp();
    $('.content-finishPrenot').slideDown();
    $('.header-finishPrenot').css({
      'background-color': '#57a2ec',
      'border-bottom': '0'
    });
    $('.header-shop').css({'background-color': '#0060ae'});
    $('#blue-arrow-down-1').hide();
    $('#blue-arrow-down-2').hide();
    $('#blue-arrow-down-3').show();
  });
}

const getDetails = () => {
  $.ajax({
    url:'../db.json'
  }).done((data)=>{
    loadDetails(data);
  });
}

const loadDetails = data => {
  var template = $('#template').html();
  Mustache.parse(template);
  var rendered = Mustache.render(template, data);
  $('.get-details').html(rendered);
  bindCircle();
}

$(document).ready( () => {
  bindEvents();
});
