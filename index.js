$('#submit').click(function () {
  const key = 'rovPeRgXByKIGY0esXuxJWFch82ub4yVBdh5YFBk';
  let data = $('#date').val();

  //esconde a teg de video e a tag de imagem
  $('#image').addClass('invisible');
  $('#video').addClass('invisible');

  //verifica se usuario selecionou a data
  if (data) {
    url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${data}`;
  } else {
    url = `https://api.nasa.gov/planetary/apod?api_key=${key}`;
  }

  //request
  $.ajax({
    type: 'GET',
    url: url,
    success: function (response) {
      showResult(response);
    },
    error: function () {
      $('#title').text('Insira uma data válida');
      $('#decription').text(
        'As imagens estão disponíveis desde 16 de junho de 1955 até o dia de hoje.'
      );
    },
  });
});

function showResult(response) {
  if (response.media_type == 'video') {
    $('#video').attr('src', `${response.url}`);
    $('#video').removeClass('invisible');
  } else {
    $('#image').attr('src', `${response.url}`);
    $('#image').removeClass('invisible');
  }

  $('#title').text(response.title);
  $('#decription').text(response.explanation);
}

$('#submit').click();
