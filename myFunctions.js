$(document).ready(function () {
  $('input[name="SelectApp"]').change(function () {
    var detailsRow = $(this).closest("tr").next(".details-row");

    if (this.checked) {
      detailsRow.show();
    } else {
      detailsRow.hide();
    }
  });
});

function validateForm() {
  let appName = document.forms[0]["appName"].value.trim();
  let company = document.forms[0]["company"].value.trim();
  let website = document.forms[0]["website"].value.trim();
  let regexName = /^[A-Za-z ]+$/;
  let regexUrl = /^(http|https):\/\/[^ "]+$/;

  if (!regexName.test(appName)) {
    alert(" اسم التطبيق يجب أن يكون أحرف إنكليزية فقط وبدون فراغات.");
    return false;
  }

  if (!regexName.test(company)) {
    alert(" اسم الشركة يجب أن يكون أحرف إنكليزية فقط.");
    return false;
  }

  if (!regexUrl.test(website)) {
    alert(" الرجاء إدخال رابط موقع صحيح (http أو https).");
    return false;
  }

  return true;
}


$(document).ready(function () {
  $("#appForm").on("submit", function (e) {
    e.preventDefault();

    if (!validateForm()) return;

    const appData = {
      name: $("input[name='appName']").val().trim(),
      company: $("input[name='company']").val().trim(),
      website: $("input[name='website']").val().trim(),
      free: $("select[name='free']").val() === "free" ? "مجاني" : "غير مجاني",
      domain: $("select[name='domain']").val(),
      description: $("textarea[name='description']").val().trim(),
    };

    alert(" تم حفظ التطبيق بنجاح!");
    window.location.href = "apps.html";
  });
});

