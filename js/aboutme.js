$(document).ready(function () {
    $('#button-cht').click(function() {
		$('#cht').hide();
		$('#eng').fadeIn();
    });
    $('#button-eng').click(function() {
		$('#eng').hide();
		$('#cht').fadeIn();
    });
});
