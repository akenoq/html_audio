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