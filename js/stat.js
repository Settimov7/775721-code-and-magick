'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_COLOR = '#ffffff';
var CLOUD_PADDING = 20;

var SHADOW_MARGIN = 10;
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';

var TEXT_FONT = 'bold 16px PT Mono';
var TEXT_COLOR = '#000000';
var TEXT_LINE_HEIGHT = 16;
var TEXT_MARGIN = 5;
var RESULT_TEXT = ['Ура вы победили!', 'Список результатов:'];

var BAR_MAX_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_MARGIN = 50;
var BAR_PLAYER_COLOR = 'rgba(255, 0, 0, 1)';

var BAR_CHART_MARGIN = 5;
var BAR_CHART_X = CLOUD_X + CLOUD_PADDING + BAR_CHART_MARGIN;
var BAR_CHART_Y = CLOUD_Y + CLOUD_PADDING + ((TEXT_LINE_HEIGHT + TEXT_MARGIN) * RESULT_TEXT.length) + BAR_CHART_MARGIN;
var BAR_NAME_Y = BAR_CHART_Y + TEXT_LINE_HEIGHT + (TEXT_MARGIN * 2) + BAR_MAX_HEIGHT;


function renderCloud(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

function renderResultText(ctx) {
  ctx.fillStyle = TEXT_COLOR;
  ctx.font = TEXT_FONT;
  ctx.textBaseline = 'hanging';
  for (var i = 0; i < RESULT_TEXT.length; i++) {
    var textX = CLOUD_X + CLOUD_PADDING;
    var textY = CLOUD_Y + CLOUD_PADDING + ((TEXT_LINE_HEIGHT + TEXT_MARGIN) * i);

    ctx.fillText(RESULT_TEXT[i], textX, textY);
  }
}

function getMaxValue(array) {
  return Math.max.apply(null, array);
}

function getBarHeight(number, maxNumber, barChartHeight) {
  return barChartHeight * number / maxNumber;
}

function getRandomBlueColor() {
  return 'rgba(0, 0, ' + Math.floor(Math.random() * 256) + ', 1)';
}

function renderBarChart(ctx, names, times) {
  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = BAR_PLAYER_COLOR;
    } else {
      ctx.fillStyle = getRandomBlueColor();
    }

    var barHeight = getBarHeight(times[i], getMaxValue(times), BAR_MAX_HEIGHT);
    var barX = BAR_CHART_X + ((BAR_WIDTH + BAR_MARGIN) * i);
    var barY = BAR_CHART_Y + TEXT_LINE_HEIGHT + TEXT_MARGIN + (BAR_MAX_HEIGHT - barHeight);
    var barScoreY = barY - TEXT_LINE_HEIGHT - TEXT_MARGIN;

    ctx.fillRect(barX, barY, BAR_WIDTH, barHeight);
    ctx.fillStyle = TEXT_COLOR;
    ctx.font = TEXT_FONT;
    ctx.textBaseline = 'hanging';
    ctx.fillText(Math.floor(times[i]).toString(), barX, barScoreY);
    ctx.fillText(names[i], barX, BAR_NAME_Y);
  }
}

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_MARGIN, CLOUD_Y + SHADOW_MARGIN, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  renderResultText(ctx);

  renderBarChart(ctx, names, times);
};
