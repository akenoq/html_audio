"use strict";

let timerId;
let duration = 0;

function playRepeatedly() {
    // проигрывание аудио
    document.getElementById("myTune").play();

    // duration returns the length of the current audio/video (in seconds)
    duration = document.getElementById("myTune").duration * 1000;

    console.log("play, duration = ", duration);

    // блокируем кнопку запуска, чтобы не множить интервал
    document.getElementById("playRepeatedly").disabled = true;

    // для циклического воспроизведение,
    // выставим интервал по длине аудио
    timerId = setInterval(() => {
        // сброс аудио в начало
        document.getElementById('myTune').pause();
        document.getElementById('myTune').currentTime = 0;
        // проигрывание аудио
        document.getElementById("myTune").play();
        console.log("play");
    }, duration);
}

function stopRepeatedly() {
    // останавливаем аудио и чистим интервал
    document.getElementById('myTune').pause();
    document.getElementById('myTune').currentTime = 0;
    clearInterval(timerId);
    console.log("stop");
    document.getElementById("playRepeatedly").disabled = false;
}

function lazerShot() {
    // чтобы был звук у нескольких подряд выстрелов,
    // сначала обнуляем предыдущий запуск аудио
    document.getElementById('lazer').pause();
    document.getElementById('lazer').currentTime = 0;
    document.getElementById('lazer').play();
}

function bonus() {
    document.getElementById('bonus').play();
}

function bangAsteroid() {
    // чтобы был звук у нескольких подряд взрывов,
    // сначала обнуляем предыдущий запуск аудио
    document.getElementById('bangAsteroid').pause();
    document.getElementById('bangAsteroid').currentTime = 0;
    document.getElementById('bangAsteroid').play();
}

function bangRocket() {
    document.getElementById('bangRocket').play();
}
