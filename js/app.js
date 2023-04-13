$('.taskList').on('keyup', function (enterTask) {
  if (enterTask.keyCode == 13 && $('.taskList').val() != '') {
    const task = $("<div class='task'></div>").text($('.taskList').val());
    const del = $("<i class='fas fa-trash-alt'></i>").click(function () {
      let p = $(this).parent();
      p.fadeOut(function () {
        p.remove();
      });
    });

    const check = $("<i class='fas fa-check'></i>").click(function () {
      let p = $(this).parent();
      p.fadeOut(function () {
        $('.completedTask').append(p);
        p.fadeIn();
      });
      $(this).remove();
    });

    task.append(del, check);
    $('.pendingTask').append(task);
    $('.taskList').val('');
  }
});