$("._home_login_submit").click(function () { handleLogin("#loginModelForm", function (resp) { if (resp.status) { window.location = ''; } }, function (resp) { var respData = resp.responseJSON; if (respData.status == false) { $.each(respData.errors, function (key, val) { $("#loginModelForm").find('[name="' + key + '"]').next('.error-block').html(val[0]); }); } }) })
function handleLogin(form, onSuccess, onerror) { $(form).ajaxSubmit({ beforeSend: function () { $(form).find('.error-block').html(''); $(form).find('._disable_on_submit').prop('disabled', true); }, complete: function () { $(form).find('._disable_on_submit').prop('disabled', false); }, success: function (resp) { onSuccess(resp); }, error: function (resp) { onerror(resp); } }); }
async function ckAddSubscriber(post_data) {
	var url = SITE_BASE_URL + 'convertkit/add_subscriber.php'
	var data = null; $.ajax({ url: url, type: "POST", data: post_data, async: false, success: function (resp) { data = resp; }, error: function (resp) { data = false; } })
	return data;
}; async function ckAddIfNewGoogleUser(result) {
	if (result.additionalUserInfo.isNewUser) {
		var ckPayload = { email: result.user.email, name: result.user.displayName, plan: 'free_plan' }
		return ckAddSubscriber(ckPayload);
	}
	return 'Old User';
}
async function verifyPlan() {
	var data = null; var url = SITE_BASE_URL + 'verify-plan'; $.ajax({ url: url, type: "POST", async: false, success: function (resp) { data = resp; }, error: function (resp) { data = resp.responseJSON; } })
	return data;
}
$(".logout_user").click(function () { if (confirm("Are you sure you want to logout?") == true) { $("#logoutForm").submit(); } })
$(".btnUpgNowPopup").click(function () { $("#modalIndividualLimit").modal('hide'); if ($("#buy").length) { $('html, body').animate({ scrollTop: $("#buy").offset().top }, 100); } else { window.location = $(this).data('href'); } })
$('select').change(function (e) { var className = $(this).find('option:selected').attr('class'); if (className == "paid_feature_modal") { $(this).find('option:not(.paid_feature_modal):eq(0)').prop('selected', true); $("#modalUpgradePlan").modal('show'); return false; } else if (className == "paid_style_feature_modal") { $(this).find('option:not(.paid_style_feature_modal):eq(0)').prop('selected', true); $("#modalStyleUpgradePlan").modal('show'); return false; } else if (className == "paid_roomtype_feature_modal") { $(this).find('option:not(.paid_roomtype_feature_modal):eq(0)').prop('selected', true); $("#modalRoomTypeUpgradePlan").modal('show'); return false; } })
$(".paid_feature_modal").click(function () { $("#modalUpgradePlan").modal('show'); })
$(".paid_style_feature_modal").click(function () { $("#modalStyleUpgradePlan").modal('show'); })
$(".paid_roomtype_feature_modal").click(function () { $("#modalRoomTypeUpgradePlan").modal('show'); })
$(".api_buy_modal").click(function () { $("#apiUpgradeModal").modal('show'); })
$('form').submit(function () { $(this).find('._disable_on_submit').prop('disabled', true); }); function createDesignItem(data, showButton = null) {
	showButton = true; isSelected = true; isShowUseAsInput = data.show_data; enhanceButton = true; showHdButton = true; precisionUpUser = data.precisionUserValue; showDelBtn = false; if (data.private == 1) { showDelBtn = false; } else { showDelBtn = true; }
	var leftSide = _createDesignItemBox(data.original_url, ['Before'], showButton, enhanceButton == false, isShowUseAsInput, isSelected = false, showHdButton = false, data.section, showDelBtn, precisionUpUser); var rightOL = ['After', 'Style: ' + data.style,]
	if (data.room_type != null && data.room_type != '') { rightOL.push(`Room Type: ${data.room_type}`); }
	if (data.mode != null && data.mode != '') { rightOL.push(`Mode: ${data.mode}`); }
	var rightSide = _createDesignItemBox(data.generated_url, rightOL, showButton, enhanceButton == true, isShowUseAsInput, isSelected = true, showHdButton = true, data.section, showDelBtn, precisionUpUser); var html = `<div class="row mb-2">
                    <div class="col-md-6 col-sm-6">
                        ${leftSide}
                    </div>
                    <div class="col-md-6 col-sm-6">
                        ${rightSide}
                    </div>
                </div>`; return html;
}
function _createDesignItemBox(imageUrl, styles = [], canDownload = true, enhanceButton, isShowUseAsInput, isSelected, showHdButton, section, showDelBtn, precisionUpUser) {
	var image = `<img class="rendered-img" src="${imageUrl}" alt="" loading="lazy">`; var icons = ''; if (canDownload) {
		icons = `<div class="downld-bx">
					<div class="sharetab sharetab-buttons share text-center" onclick="previewImage('${imageUrl}')" title="Open">
                        <img src="/web/images/magnifying1.svg" alt="" loading="lazy">
						<span>Show</span>
                    </div>
                    <a class="sharetab sharetab-buttons download" href="javascript:void(0)" data-download-url="${imageUrl}" title="Download" download>
                        <img src="/web/images/download1-hover.svg" alt="" loading="lazy">
						<span>Download</span>
                    </a>

                    `; if (isShowUseAsInput == true) {
			icons += `<a class="sharetab sharetab-buttons use-as-input" data-img="${imageUrl}" href="javascript:void(0)" title="Use as Input">
						<img src="/web/images/input1.svg" alt="" loading="lazy">
						<span>Input</span>
					</a>`; if (enhanceButton == true) {
				if (precisionUpUser == 'true') {
					icons += `<a class="sharetab sharetab-buttons ultra-enhancerbtn" onclick="showUpdateModal()" data-img="${imageUrl}" data-sec="${section}" href="javascript:void(0)" title="Ultra Enhancer">
									<img src="/web/images/enhance1.svg" alt="" loading="lazy">
									<span>Enhance</span>
								</a>`;
				} else {
					icons += `<a class="sharetab  sharetab-buttons ultra-enhancer" onclick="ultraEnhancer(this)" data-img="${imageUrl}" data-sec="${section}" href="javascript:void(0)" title="Ultra Enhancer">
									<img src="/web/images/enhance1.svg" alt="" loading="lazy">
									<span>Enhance</span>
								</a>`;
				}
			}
			if (showHdButton == true) {
				if (precisionUpUser == 'true') {
					icons += `<div class="sharetab sharetab-buttons full_hd_quality share text-center" onclick="showUpdateModal()" data-img="${imageUrl}" data-sec="${section}" title="Full Hd Quality">
									<img src="/web/images/hd1.svg">
									<span>HD</span>
								</div>`; icons += `<div class="sharetab sharetab-buttons precision_btn share text-center" onclick="showUpdateModal()" data-img="${imageUrl}" data-sec="${section}" title="Full Hd Quality">
                                <img src="/web/images/in-painting-icon.png">
                                <span>Precision+</span>
                                </div>`;
				} else {
					icons += `<div class="sharetab sharetab-buttons full_hd_quality generate_hd_img share text-center" data-img="${imageUrl}" data-sec="${section}" title="Full Hd Quality">
									<img src="/web/images/hd1.svg">
									<span>HD</span>
								</div>`; icons += `<div class="sharetab sharetab-buttons precision_btn edit_with_precision share text-center" data-img="${imageUrl}" data-sec="${section}" title="Full Hd Quality">
                                <img src="/web/images/in-painting-icon.png">
                                <span>Precision+</span>
                                </div>`;
				}
			}
		}
		icons += `</div>`; if (isSelected == true) {
			if (showDelBtn == true) {
				var selectImage = `<div class="chkimg imgcheck">
								<input type="checkbox" class="ml_dw_img" onclick="getMultipleImages('${imageUrl}')"/>
							</div>`; icons = selectImage + icons;
			}
		}
	}
	var stylesHtml = `<div class="render-overlay-box">`; for (i = 0; i < styles.length; i++) { stylesHtml += `<span class="render-overlay">${styles[i]}</span>`; }
	stylesHtml += `</div>`; var html = `<div class="render-img-bx fadeIn">
                    ${image}
                    ${icons}
					${selectImage !== undefined ? selectImage : '&nbsp;'}
                    ${stylesHtml}
                </div>`; return html;
}
$(".cls_menu.menu-link").click(function () { closeNav(); })
$(".img-upload-outer").on('dragenter dragover dragleave drop', function (e) {
	e.preventDefault()
	e.stopPropagation()
}); $("body").on('click', '.use-as-input', async function () { var image_url = $(this).data('img'); var sectionId = $(this).closest('.user_gallery_container').data('sec-id'); $("#forminterior" + sectionId).find("[name='image_type']").val('url'); $("#forminterior" + sectionId).find("[name='image']").val(image_url); let gallery = document.getElementById(`gallery${sectionId}`); gallery.style.display = 'block'; let uploadText = document.getElementById(`uploadText${sectionId}`); uploadText.style.display = 'none'; document.getElementsByClassName(`drop-cont${sectionId}`)[0].style.visibility = 'hidden'; let img = document.createElement('img'); img.src = image_url; document.getElementById(`gallery${sectionId}`).removeChild(document.getElementById(`gallery${sectionId}`).firstElementChild); document.getElementById(`gallery${sectionId}`).appendChild(img); document.getElementById(`forminterior${sectionId}`).scrollIntoView(); }); function attachFilesToInput(sec, files) { var fileInput = document.getElementById(`fileselect${sec}`); fileInput.files = files; fileInput.dispatchEvent(new Event('change')); }
var imageUploader = document.getElementsByClassName('img-upload-outer'); $.each(imageUploader, function (index, item) { item.addEventListener('drop', (ev) => { ev.preventDefault(); if (user == null) { showLoginModal(); return; } else { var sec_id = item.dataset.section; var fileInput = document.getElementById(`fileselect${sec_id}`); fileInput.files = ev.dataTransfer.files; fileInput.dispatchEvent(new Event('change')); } }) }); $(".dimg-picker").on('change', function (e) { var filePicker = $(this); var files = filePicker[0].files; var section = filePicker.data('section'); ipsValidateImage(files[0], () => { ipsPreviewImg(section); }, (error) => { ipsFailOnValidImage(error); filePicker.val(''); $(`#gallery${section}`).hide(); $(`#uploadText${section}`).removeAttr("style"); $(`.drop-cont${section}`).removeAttr("style"); $("#forminterior" + section).find("[name='image_type']").val(''); $("#forminterior" + section).find("[name='image']").val(''); }); }); $(".img-upload-outer").on('click touchstart', function () { var target = 'fileselect' + $(this).data('section'); document.getElementById(target).click(); }); function ipsFailOnValidImage(error, min_height_width = 512) {
	if (error == 'type') { alert('Allowed Extensions are: jpeg, jpg and png.'); }
	if (error == 'size') {
		let error_message = 'Minimum size should be ' + min_height_width + 'x' + min_height_width
		alert(error_message);
	}
}
$(".dash_mobile_menu").click(function () { $('.dash-menus').addClass('screen-left-active'); }); $(".dash-menu-close").click(function () { $('.dash-menus').removeClass('screen-left-active'); }); $('body').on('click', '.st-b-ug-plan', function () { goToBuySection(); }); function goToBuySection() { var target = $('#buy'); if (target.length) { $('html,body').animate({ scrollTop: target.offset().top }, 100); } else { window.location = SITE_BASE_URL + "#buy"; } }
function ipsPreviewImg(section) {
	var file = $("#fileselect" + section)[0].files[0]; let gallery = document.getElementById(`gallery${section}`); gallery.style.display = 'block'; let uploadText = document.getElementById(`uploadText${section}`); uploadText.style.display = 'none'; document.getElementsByClassName(`drop-cont${section}`)[0].style.visibility = 'hidden'; let reader = new FileReader()
	reader.readAsDataURL(file)
	reader.onloadend = function () {
		let img = document.createElement('img')
		img.src = reader.result
		document.getElementById(`gallery${section}`).removeChild(document.getElementById(`gallery${section}`).firstElementChild); document.getElementById(`gallery${section}`).appendChild(img); $("#forminterior" + section).find("[name='image_type']").val('blob'); $("#forminterior" + section).find("[name='image']").val(reader.result);
	}
}
const ipsValidateImage = (file, success, fail, min_height_width = 512) => {
	var allowedFileType = ['image/jpeg', 'image/png']; let fileTypeValid = allowedFileType.some((fileType) => fileType === file.type); if (!fileTypeValid) { return fail('type'); }
	var img = new Image(); var oUrl = window.URL.createObjectURL(file); img.src = oUrl; var isValidDimension = false; return new Promise(res => {
		img.onload = function (resp) {
			var width = img.naturalWidth; var height = img.naturalHeight; window.URL.revokeObjectURL(img.src); isValidDimension = (width >= min_height_width && height >= min_height_width); if (!isValidDimension) { return fail('size'); }
			return success();
		};
	});
}; function updateFastSpring(userDetail = null) { if (user) { fastspring.builder.recognize({ "email": user.email, }); } }
function previewImage(src) {
	$("#modalImagePreview").modal('show')
	$("#mip").attr('src', src);
}
var multipleDownloadImg = []; function getMultipleImages(src) {
	if ($('.ml_dw_img').is(':checked') && !this.multipleDownloadImg.includes(src)) { this.multipleDownloadImg.push(src); } else { this.multipleDownloadImg.splice(this.multipleDownloadImg.indexOf(src), 1); }
	if (this.multipleDownloadImg.length > 0) { $(`.delete_button`).removeClass('hidden'); $(`.download_button`).removeClass('hidden'); } else { $(`.delete_button`).addClass('hidden'); $(`.download_button`).addClass('hidden'); }
}
function deleteMultipleImages() {
	var jsonData = JSON.stringify(this.multipleDownloadImg); var route = $('#deleteRenderImages').data('route'); Swal.fire({ title: 'Are you sure?', text: "You won't be able to revert this!", icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!' }).then((willDelete) => {
		if (willDelete.isConfirmed) {
			$.ajax({
				url: route, type: "POST", data: { images: this.multipleDownloadImg }, success: function (response) {
					Swal.fire('Deleted!', 'Your Images has been deleted.', 'success')
					setTimeout(function () { window.location.reload(); }, 1000);
				}, error: function (xhr, status, error) { var error = error.responseJSON; Swal.fire('Oops!', error.message, 'warning') }
			});
		}
	});
}
function downloadMultipleImages() { var zip = new JSZip(); var img = zip.folder("gallery_images"); $.each(this.multipleDownloadImg, function (i, item) { var image = item; var promise = downloadFile(image); img.file("image" + [i] + ".png", promise); }); zip.generateAsync({ type: "blob" }).then(function (content) { saveAs(content, "archive.zip"); }); }
function saveAs(blob, filename) {
	if (typeof navigator.msSaveOrOpenBlob !== 'undefined') { return navigator.msSaveOrOpenBlob(blob, fileName); } else if (typeof navigator.msSaveBlob !== 'undefined') { return navigator.msSaveBlob(blob, fileName); } else {
		var elem = window.document.createElement('a'); elem.href = window.URL.createObjectURL(blob); elem.download = filename; elem.style = 'display:none;opacity:0;color:transparent;'; (document.body || document.documentElement).appendChild(elem); if (typeof elem.click === 'function') { elem.click(); } else { elem.target = '_blank'; elem.dispatchEvent(new MouseEvent('click', { view: window, bubbles: true, cancelable: true })); }
		URL.revokeObjectURL(elem.href);
	}
}
function downloadFile(url) { return new JSZip.external.Promise(function (resolve, reject) { var xhr = new XMLHttpRequest(); xhr.responseType = 'blob'; xhr.onload = function () { resolve(xhr.response); }; xhr.open('GET', url); xhr.send(); }); }
$("[data-hide='true']").on('click', function () { var target = $(this).data('target'); $(target).hide(); })
function closeCustomModal(modal) { $("#modalImagePreview").show(); }
function noGeneration() { return `<div style="text-align:center; margin-left: 37px;margin-top: 237px;margin-bottom: 437px;"><p style="font-size: 20px; color: white">No Generations 😥😥</p></div>` }
function _updateAiCatePillsStatus(status) { if (status == 'disable') { $("#ai-category-pills").find('button.nav-link:not(.active)').addClass('ai-pill-disabled').attr('disabled', true); } else { $("#ai-category-pills").find('button.nav-link:not(.active)').removeClass('ai-pill-disabled').attr('disabled', false); } }
let get_designs_config = { url: SITE_BASE_URL + 'get-designs', page: 1, type: 'public', isLoading: false }
function publicRenderError(sec) { var code = noGeneration(); const fragment = document.createElement('div'); fragment.innerHTML = code; document.getElementById(`all_data${sec}`).appendChild(fragment); }
var page = 1; $(document).on('click', '.page-link', function () { page = $(this).attr('data-url').split('=').pop(); getGeneratedDesigns('gallery'); }); function getGeneratedDesigns(type) {
	if (get_designs_config.isLoading || get_designs_config.url == null || get_designs_config.page == null) { return false; }
	if (type == 'gallery') { page = page; } else { page = get_designs_config.page; }
	var response = null; $.ajax({ url: get_designs_config.url, data: { page: page, type: get_designs_config.type, pageType: type }, async: false, beforeSend: function () { get_designs_config.isLoading = true; }, success: function (resp) { if (resp.pageType == 'gallery') { $('#all_data').html(''); $('#all_data').html(resp.data); } else { response = resp; get_designs_config.page = resp.data.next_page; } }, error: function (error) { }, complete: function () { get_designs_config.isLoading = false; } }); return response;
}
const getBase64FromUrl = async (url) => { return new Promise((resolve) => { $.ajax({ url: SITE_BASE_URL + "get-encoded-file", async: false, data: { image_url: url }, success: function (resp) { resolve(resp); }, error: function (resp) { var json = resp.responseJSON; resolve(json); } }) }); }
function _showUsageMessage(updatedUsage) {
	if (updatedUsage.error_code == "individual_limit_crossed") { $("#modalIndividualLimit").modal('show'); } else if (updatedUsage.error_code == "FREE_PLAN_LIMIT") { $("#limitCrossedMessage").html("<strong>You do not have</strong> enough credits! Wait 24 hours for 3 new credits or <strong> <span class='st-b-ug-plan'> UPGRADE NOW </span> - Our Early Bird discount will expire soon. You'll never see these low prices again!</strong>").show(); if ($("#udFreeLimitCrossModal").length) { $("#udFreeLimitCrossModal").modal('show'); } } else if (updatedUsage.error_code == "daily_fair_usage") { $("#modalDailyFairUsage").modal('show'); } else if (updatedUsage.error_code == "DAILY_FREE_DISABLED") { $("#limitCrossedMessage").html("Currently, new generations are disabled for free users.<span class='st-b-ug-plan'>Upgrade</span> to Pro to bypass the queue and generate unlimited designs.").show(); } else { alert(updatedUsage.message); }
	var target = $('#buy'); if (target.length) { $('html,body').animate({ scrollTop: target.offset().top }, 100); }
}
var generationCount = 0; async function _generateDesign(sec, el) {
	var precisionUserValue = document.getElementById('precisionUser').value; var newGenerationCount = generationCount + 1; generationCount = newGenerationCount; if (newGenerationCount == 7) { $("#multipleGenaerationModal").modal('show'); }
	$(el).attr('disabled', true); var etaValue = 0.0; var cgsValue = 7.0; var negativeValue = ""; var stepsValue = 40; var $container = $("#forminterior" + sec); let image_type = $container.find("[name='image_type'").val(); let image = $container.find("[name='image'").val(); if (image == '') { alert("Make sure you add an Input Image!"); $(el).attr('disabled', false); return; }
	var isSubbed = false; var updatedUsage = await verifyPlan(); if ((!updatedUsage) || !updatedUsage.status) { _showUsageMessage(updatedUsage); $(el).attr('disabled', false); return; }
	$.ajax({ url: 'admin/dashboard/updateButtonClickCount', type: 'post', data: { sec: sec }, dataType: 'json', success: function (resp) { console.log(resp); }, error: function (resp) { swal("Something Went Wrong!", { icon: "error", }); } }); var styleType = document.getElementById(`styleType${sec}`).value; var roomType = document.getElementById(`roomType${sec}`).value; var countStyles = { styleType: styleType, roomType: roomType, sec: sec }; $.ajax({ type: "POST", url: "admin/dashboard/updateButtonStyleClickCount", data: countStyles, success: function (response) { }, error: function (xhr, status, error) { } }); var numUserGens = updatedUsage.data.count; isSubbed = !updatedUsage.data.watermark; var watermark = updatedUsage.data.watermark; $('.ultra-enhancer').addClass('disable-btn'); $('.full_hd_quality').addClass('disable-btn'); $('._btn_gndeisgn').addClass('disable-btn'); $('.precision_btn').addClass('disable-btn'); var data = document.getElementById(`all_data${sec}`); const newFreeformSpacer = document.createElement('div'); newFreeformSpacer.id = "progressindicatordiv"
	newFreeformSpacer.innerHTML = `<div class="container22" id='progid'>
			<label for="onehundred" class="label" id=hundredid${sec}></label>
			<div class="custom_loader">
				<h5 class="custom_loader_text">The AI is doing its magic, please wait 10-40 seconds...</h5>
				<svg role="img" aria-label="Mouth and eyes come from 9:00 and rotate clockwise into position, right eye blinks, then all 					parts rotate and merge into 3:00" class="smiley" viewBox="0 0 128 128" width="128px" height="128px">
				<defs>
					<clipPath id="smiley-eyes">
						<circle class="smiley__eye1" cx="64" cy="64" r="8" transform="rotate(-40,64,64) translate(0,-56)" />
						<circle class="smiley__eye2" cx="64" cy="64" r="8" transform="rotate(40,64,64) translate(0,-56)" />
					</clipPath>
					<linearGradient id="smiley-grad" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stop-color="#000" />
						<stop offset="100%" stop-color="#fff" />
					</linearGradient>
					<mask id="smiley-mask">
						<rect x="0" y="0" width="128" height="128" fill="url(#smiley-grad)" />
					</mask>
				</defs>
				<g stroke-linecap="round" stroke-width="12" stroke-dasharray="175.93 351.86">
					<g>
						<rect fill="hsl(193,90%,50%)" width="128" height="64" clip-path="url(#smiley-eyes)" />
						<g fill="none" stroke="hsl(193,90%,50%)">
							<circle class="smiley__mouth1" cx="64" cy="64" r="56" transform="rotate(180,64,64)" />
							<circle class="smiley__mouth2" cx="64" cy="64" r="56" transform="rotate(0,64,64)" />
						</g>
					</g>
					<g mask="url(#smiley-mask)">
						<rect fill="hsl(223,90%,50%)" width="128" height="64" clip-path="url(#smiley-eyes)" />
						<g fill="none" stroke="hsl(223,90%,50%)">
							<circle class="smiley__mouth1" cx="64" cy="64" r="56" transform="rotate(180,64,64)" />
							<circle class="smiley__mouth2" cx="64" cy="64" r="56" transform="rotate(0,64,64)" />
						</g>
					</g>
				</g>
			</svg>
			</div>
		</div>`; data.insertBefore(newFreeformSpacer, data.firstChild); document.getElementById(`jumphere${sec}`).scrollIntoView(); var divElement = document.getElementById(`all_data${sec}`); divElement.firstElementChild.scrollIntoView(); _updateAiCatePillsStatus('disable'); document.getElementById(`hundredid${sec}`).click(); var strengthType = document.getElementById(`strength${sec}`).value; var modeType = document.getElementById(`modeType${sec}`).value; var is_staging = (APP_LOCAL == 'production') ? 'false' : 'true'; var noOfDesign = document.getElementById(`no_of_design${sec}`).value; var customInstructionData = document.getElementById(`custom_instruction${sec}`).value; var customInstruction = 0; if (document.getElementById(`nwcust${sec}`).checked === true) { customInstruction = 1; }
	var privatize = 0; if (document.getElementById(`nwtoggle${sec}`).checked === true) { privatize = 1; }
	var promptALL = ""; var mobileCheck = 0; if (window.screen.availWidth < 600) { mobileCheck = 1; } else { mobileCheck = 0; }
	var superenhance = 0; if ($("#ck_full_hd_" + sec).length && $("#ck_full_hd_" + sec).is(':checked') === true) { superenhance = 1; }
	var formData = new FormData(); formData.append("data", image); var aiAPI = null; if (modeType == 'Creative Redesign' || modeType == 'Fill The Room' || modeType == 'Fill The Garden' || modeType == 'Fill The Exterior') { aiAPI = `${GPU_SERVER_HOST}/init?init=https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&prompt=${styleType}&roomtype=${roomType}&prompt_modifier=${promptALL}&id=${user.uid}&designtype=${sec}&mobilecheck=${mobileCheck}&eta=${etaValue}&guidance_scale=${cgsValue}&negative_prompt=${negativeValue}&steps=${stepsValue}&strengthType=${strengthType}&modeType=${modeType}&privateId=${privatize}&numUserGens=${numUserGens}&isSubbed=${isSubbed}&public=${privatize}&superenhance=${superenhance}&watermark=${watermark}&image_type=${image_type}&is_staging=${is_staging}&is_custom_instruction=${customInstruction}&custom_instruction=${customInstructionData}&no_of_Design=${noOfDesign}`; } else { aiAPI = `${GPU_SERVER_HOST}/homedesigns?init=https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&prompt=${styleType}&roomtype=${roomType}&prompt_modifier=${promptALL}&id=${user.uid}&designtype=${sec}&mobilecheck=${mobileCheck}&eta=${etaValue}&guidance_scale=${cgsValue}&negative_prompt=${negativeValue}&steps=${stepsValue}&strengthType=${strengthType}&modeType=${modeType}&privateId=${privatize}&numUserGens=${numUserGens}&isSubbed=${isSubbed}&superenhance=${superenhance}&watermark=${watermark}&image_type=${image_type}&is_staging=${is_staging}&is_custom_instruction=${customInstruction}&custom_instruction=${customInstructionData}&no_of_Design=${noOfDesign}`; }
	await fetch(aiAPI, { method: 'POST', mode: 'cors', cache: 'no-cache', credentials: "include", headers: { accept: 'multipart/form-data', 'Access-Control-Allow-Origin': '*' }, crossDomain: true, body: formData, }).then(response => {
		if (response.status == 501) { modalStore.style.display = 'block'; }
		return response.json();
	}).then(result => {
		$('.ultra-enhancer').removeClass('disable-btn'); $('.full_hd_quality').removeClass('disable-btn'); $('._btn_gndeisgn').removeClass('disable-btn'); $('.precision_btn').removeClass('disable-btn'); genratedImage = result['Sucess']['generated_image']; orignalImage = result['Sucess']['original_image']; genratedImage.forEach(function (item) {
			var data = document.getElementById(`all_data${sec}`); var newFreeformSpacer = document.createElement('div'); data.insertBefore(newFreeformSpacer, data.firstChild); var design = { original_url: orignalImage, generated_url: item, style: styleType, room_type: roomType, mode: modeType, show_data: true, section: sec, precisionUserValue: precisionUserValue, private: privatize }
			var code = createDesignItem(design); var data = document.getElementById(`all_data${sec}`); document.getElementById(`progid`).style.display = 'none'; var newFreeformSpacer = document.createElement('div'); newFreeformSpacer.innerHTML = code; data.insertBefore(newFreeformSpacer, data.firstChild);
		});
	}).catch(error => { console.error('Error:', error); }); var progressindicatordiv = document.getElementById(`progressindicatordiv`); progressindicatordiv.remove(); $(el).attr('disabled', false); _updateAiCatePillsStatus('enable');
}
function customInstruction(sec) { var isCustomInstruction = document.getElementById(`nwcust${sec}`).checked; if (isCustomInstruction == true) { $(`#custom_instruction${sec}`).show(); $("#customAiModal").modal('show'); } else { $(`#custom_instruction${sec}`).val('').hide(); $("#customAiModal").modal('hide'); } }
function download(downloadURL) { $.ajax({ url: SITE_BASE_URL + "get-base64", data: { source: downloadURL }, async: false, beforeSend: function () { $("#hdaLoaderOuter").addClass('d-flex'); $("#hdaLoaderOuter").find('.hda-loader-message').html('Downloding Image...'); }, complete: function () { $("#hdaLoaderOuter").removeClass('d-flex'); }, success: function (resp) { if (resp.status) { var ImageBase64 = resp.data.base64; var a = document.createElement("a"); a.href = ImageBase64; a.download = "download.png"; a.click(); } } }); }
$('body').on('click', '[data-download-url]', function () { var $url = $(this).data('download-url'); download($url); }); $('#skip').click(function () { $('#serveyModal').hide(); }); var ichecked = $("[name='question[0]']:checked").data('target-variant'); $('#continue').click(function () {
	$('.survey_heading_div').addClass('hidden'); var welcomeVariantEl = parseInt($(this).attr('welcome-active-variant')); var currentVariantEl = $(".welcome_content[welcome-variant='" + welcomeVariantEl + "']"); currentVariantEl.removeClass('active'); if (welcomeVariantEl == 2) { var firstVariantEl = $(".question_variant[data-variant='0']"); var firstQuestionEl = $(".question-outer[data-question='1']"); $('.servey_welcome').hide(); $('#survey-next-button').show(); firstVariantEl.addClass('active'); firstQuestionEl.addClass('active'); $('form#servey_form').css('padding', '30px 40px'); $('.questions-footer').show(); $('.bottom-btn').hide(); }
	var continueButton = $("#continue"); continueButton.attr('welcome-active-variant', 2)
	var currentVariantEl = $(".welcome_content[welcome-variant=2]"); $('#skip').removeClass('hidden'); currentVariantEl.addClass('active'); $('.progress-start').val(25); var iframe = document.getElementById('welcome_video_frame'); iframe.parentNode.removeChild(iframe);
}); function customInstruction(sec) { var isCustomInstruction = document.getElementById(`nwcust${sec}`).checked; if (isCustomInstruction == true) { $(`#custom_instruction${sec}`).show(); } else { $(`#custom_instruction${sec}`).val('').hide(); } }
let progressbarValue = 25; $("#survey-next-button").click(function () {
	var activeVariantNo = parseInt($(this).attr('data-active-variant')); var activeQuestionNo = parseInt($(this).attr('data-active-question')); var currentVariantEl = $(".question_variant[data-variant='" + activeVariantNo + "']"); if (activeVariantNo == 0) {
		var targetVariantNo = $("[name='question[" + activeQuestionNo + "]']:checked").data('target-variant'); var targetVariant = $(".question_variant[data-variant='" + targetVariantNo + "']"); if (targetVariantNo == '' || targetVariantNo == undefined || targetVariant.length == 0) { alert("Please select an answer before clicking Next."); progressbarValue = progressbarValue; $('.progrss-value').val(progressbarValue); return false; }
		var currentQuestion = $(".question-outer[data-question='" + activeQuestionNo + "']"); var checkedOptions = currentQuestion.find("input[type='radio']:checked, input[type='checkbox']:checked"); if (checkedOptions.length === 0) { alert("Please select an answer before clicking Next."); progressbarValue = progressbarValue; $('.progrss-value').val(progressbarValue); return false; }
		currentVariantEl.removeClass('active'); targetVariant.addClass('active'); $('.prev').removeClass('hidden'); var nextQuestionEl = targetVariant.find('[data-question]:first-child'); nextQuestionEl.addClass('active'); progressbarValue = progressbarValue + 25; $(this).attr('data-active-variant', targetVariantNo); $(this).attr('data-active-question', nextQuestionEl.attr('data-question')); $('.progrss-value').val(progressbarValue); return true;
	}
	var currentQuestionEl = $(".question_variant[data-variant='" + activeVariantNo + "']").find('[data-question="' + activeQuestionNo + '"]'); if (currentQuestionEl.find('input[type="text"], textarea').length) { var inputField = currentQuestionEl.find('input[type="text"], textarea'); if (inputField.prop('required') && inputField.val().trim() === '') { alert("Please fill in the required field."); return false; } }
	progressbarValue = progressbarValue + 25; $('.progrss-value').val(progressbarValue); $("#survey-next-button").html("Submit"); var nextQuestionEl = currentQuestionEl.next(); if (nextQuestionEl.length) { currentQuestionEl.removeClass('active'); nextQuestionEl.addClass('active'); $(this).attr('data-active-question', nextQuestionEl.attr('data-question')); return false; }
	var formData = $('#servey_form').serialize(); $.ajax({ type: "POST", url: SITE_BASE_URL + "userServey", data: formData, success: function (result) { alert('Thank you for your answers. We are personalizing your experience…'); $('#serveyModal').modal('hide'); location.reload(); }, error: function (error) { console.log('error', error); } });
}); $("#survey-prev-button").click(function () {
	progressbarValue = progressbarValue - 25; $('.progrss-value').val(progressbarValue); var submitButton = $("#survey-next-button"); var activeVariantNo = parseInt(submitButton.attr('data-active-variant')); var activeQuestionNo = parseInt(submitButton.attr('data-active-question')); var currentVariantEl = $(".question_variant[data-variant='" + activeVariantNo + "']"); $("#survey-next-button").html("Next"); var currentQuestionEl = currentVariantEl.find('[data-question]').attr('data-question'); var targetQuestionChecked = $("[name='question[" + activeQuestionNo + "]']").prop("checked", false); var otherTextInput = currentVariantEl.find('[data-question="' + activeQuestionNo + '"] input.other_text'); if (otherTextInput.length) { otherTextInput.val(''); }
	var otherTextArea = document.querySelector('input[name="other_text[' + activeQuestionNo + ']"]'); otherTextArea.style.display = 'none'; if (activeQuestionNo == currentQuestionEl) { var targetVariant = $(".question_variant[data-variant='0']"); targetVariant.addClass('active'); $('.prev').addClass('hidden'); currentVariantEl.removeClass('active'); submitButton.attr('data-active-variant', 0); submitButton.attr('data-active-question', 1); return true; }
	var currentQuestion = $(".question-outer[data-question='" + activeQuestionNo + "']"); var targetVariant = $(".question-outer[data-question='" + activeQuestionNo + "']").prev(); currentQuestion.removeClass('active'); targetVariant.addClass('active'); submitButton.attr('data-active-variant', activeVariantNo); submitButton.attr('data-active-question', targetVariant.attr('data-question'));
}); function showOtherTextArea(radio, questionId) { var otherTextArea = document.querySelector('input[name="other_text[' + questionId + ']"]'); if (radio.checked && radio.value === 'other') { otherTextArea.style.display = 'block'; otherTextArea.setAttribute('required', 'required'); } else { otherTextArea.style.display = 'none'; otherTextArea.removeAttribute('required'); } }
async function ultraEnhancer(el) {
	if (user == null) { showLoginModal(); return; }
	var precisionUserValue = document.getElementById('precisionUser').value; var sec = $(el).data('sec'); var image_url = $(el).data('img'); var route = $("#routeToImageData").data('route'); $('.ultra-enhancer').addClass('disable-btn'); $('.full_hd_quality').addClass('disable-btn'); $('._btn_gndeisgn').addClass('disable-btn'); $('.precision_btn').addClass('disable-btn'); var data = document.getElementById(`all_data${sec}`); const newFreeformSpacer = document.createElement('div'); newFreeformSpacer.id = "progressindicatordiv"
	newFreeformSpacer.innerHTML = `<div class="container22" id='progid'>
			<label for="onehundred" class="label" id=hundredid${sec}></label>
			<div class="custom_loader">
				<h5 class="custom_loader_text">The AI is doing its magic, please wait 10-40 seconds...</h5>
				<svg role="img" aria-label="Mouth and eyes come from 9:00 and rotate clockwise into position, right eye blinks, then all 					parts rotate and merge into 3:00" class="smiley" viewBox="0 0 128 128" width="128px" height="128px">
				<defs>
					<clipPath id="smiley-eyes">
						<circle class="smiley__eye1" cx="64" cy="64" r="8" transform="rotate(-40,64,64) translate(0,-56)" />
						<circle class="smiley__eye2" cx="64" cy="64" r="8" transform="rotate(40,64,64) translate(0,-56)" />
					</clipPath>
					<linearGradient id="smiley-grad" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stop-color="#000" />
						<stop offset="100%" stop-color="#fff" />
					</linearGradient>
					<mask id="smiley-mask">
						<rect x="0" y="0" width="128" height="128" fill="url(#smiley-grad)" />
					</mask>
				</defs>
				<g stroke-linecap="round" stroke-width="12" stroke-dasharray="175.93 351.86">
					<g>
						<rect fill="hsl(193,90%,50%)" width="128" height="64" clip-path="url(#smiley-eyes)" />
						<g fill="none" stroke="hsl(193,90%,50%)">
							<circle class="smiley__mouth1" cx="64" cy="64" r="56" transform="rotate(180,64,64)" />
							<circle class="smiley__mouth2" cx="64" cy="64" r="56" transform="rotate(0,64,64)" />
						</g>
					</g>
					<g mask="url(#smiley-mask)">
						<rect fill="hsl(223,90%,50%)" width="128" height="64" clip-path="url(#smiley-eyes)" />
						<g fill="none" stroke="hsl(223,90%,50%)">
							<circle class="smiley__mouth1" cx="64" cy="64" r="56" transform="rotate(180,64,64)" />
							<circle class="smiley__mouth2" cx="64" cy="64" r="56" transform="rotate(0,64,64)" />
						</g>
					</g>
				</g>
			</svg>
			</div>
		</div>`; data.insertBefore(newFreeformSpacer, data.firstChild); document.getElementById(`jumphere${sec}`).scrollIntoView(); var divElement = document.getElementById(`all_data${sec}`); divElement.firstElementChild.scrollIntoView(); var is_staging = (APP_LOCAL == 'production') ? 'false' : 'true'; _updateAiCatePillsStatus('disable'); document.getElementById(`hundredid${sec}`).click(); $.ajax({
		url: route, method: "POST", data: { "image": image_url }, success: async function (resp) {
			var formData = new FormData(); formData.append("data", resp.data.image); var customInstruction = 0; var roomType = resp.data.room_type; var strengthType = 'very_low'; var modeType = 'Beautiful Redesign'; var styleType = 'No Style'; aiAPI = `${GPU_SERVER_HOST}/enhace?init=https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&id=${user.uid}&privateId=${resp.data.privateId}&is_staging=${is_staging}&roomtype=${roomType}&modeType=${modeType}&prompt=${styleType}&designtype=${sec}&is_custom_instruction=${customInstruction}&strengthType=${strengthType}`; await fetch(aiAPI, { method: 'POST', mode: 'cors', cache: 'no-cache', credentials: "include", headers: { accept: 'multipart/form-data', 'Access-Control-Allow-Origin': '*' }, crossDomain: true, body: formData, }).then(response => {
				if (response.status == 501) { modalStore.style.display = 'block'; }
				return response.json();
			}).then(result => {
				$('.ultra-enhancer').removeClass('disable-btn'); $('.full_hd_quality').removeClass('disable-btn'); $('._btn_gndeisgn').removeClass('disable-btn'); $('.precision_btn').removeClass('disable-btn'); genratedImage = result['Sucess']['generated_image']; orignalImage = result['Sucess']['original_image']; genratedImage.forEach(function (item) {
					var data = document.getElementById(`all_data${sec}`); var newFreeformSpacer = document.createElement('div'); data.insertBefore(newFreeformSpacer, data.firstChild); var design = { original_url: orignalImage, generated_url: item, style: resp.data.style, room_type: resp.data.room_type, mode: resp.data.mode, show_data: true, section: sec, private: resp.data.privateId, precisionUserValue: precisionUserValue, }
					var code = createDesignItem(design); var data = document.getElementById(`all_data${sec}`); document.getElementById(`progid`).style.display = 'none'; var newFreeformSpacer = document.createElement('div'); newFreeformSpacer.innerHTML = code; data.insertBefore(newFreeformSpacer, data.firstChild);
				});
			}).catch(error => { console.error('Error:', error); }); var progressindicatordiv = document.getElementById(`progressindicatordiv`); progressindicatordiv.remove(); $(el).attr('disabled', false); _updateAiCatePillsStatus('enable');
		}, error: function (resp) { data = resp.responseJSON; }
	})
}
$(document).on('click', '.generate_hd_img', function () {
	if (user == null) { showLoginModal(); return; }
	var precisionUserValue = document.getElementById('precisionUser').value; var sec = $(this).data('sec'); $('.ultra-enhancer').addClass('disable-btn'); $('.full_hd_quality').addClass('disable-btn'); $('._btn_gndeisgn').addClass('disable-btn'); $('.precision_btn').addClass('disable-btn'); var data = document.getElementById(`all_data${sec}`); const newFreeformSpacer = document.createElement('div'); newFreeformSpacer.id = "progressindicatordiv"
	newFreeformSpacer.innerHTML = `<div class="container22" id='progid'>
			<label for="onehundred" class="label" id=hundredid${sec}></label>
			<div class="custom_loader">
				<h5 class="custom_loader_text">The AI is doing its magic, please wait 10-40 seconds...</h5>
				<svg role="img" aria-label="Mouth and eyes come from 9:00 and rotate clockwise into position, right eye blinks, then all 					parts rotate and merge into 3:00" class="smiley" viewBox="0 0 128 128" width="128px" height="128px">
				<defs>
					<clipPath id="smiley-eyes">
						<circle class="smiley__eye1" cx="64" cy="64" r="8" transform="rotate(-40,64,64) translate(0,-56)" />
						<circle class="smiley__eye2" cx="64" cy="64" r="8" transform="rotate(40,64,64) translate(0,-56)" />
					</clipPath>
					<linearGradient id="smiley-grad" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stop-color="#000" />
						<stop offset="100%" stop-color="#fff" />
					</linearGradient>
					<mask id="smiley-mask">
						<rect x="0" y="0" width="128" height="128" fill="url(#smiley-grad)" />
					</mask>
				</defs>
				<g stroke-linecap="round" stroke-width="12" stroke-dasharray="175.93 351.86">
					<g>
						<rect fill="hsl(193,90%,50%)" width="128" height="64" clip-path="url(#smiley-eyes)" />
						<g fill="none" stroke="hsl(193,90%,50%)">
							<circle class="smiley__mouth1" cx="64" cy="64" r="56" transform="rotate(180,64,64)" />
							<circle class="smiley__mouth2" cx="64" cy="64" r="56" transform="rotate(0,64,64)" />
						</g>
					</g>
					<g mask="url(#smiley-mask)">
						<rect fill="hsl(223,90%,50%)" width="128" height="64" clip-path="url(#smiley-eyes)" />
						<g fill="none" stroke="hsl(223,90%,50%)">
							<circle class="smiley__mouth1" cx="64" cy="64" r="56" transform="rotate(180,64,64)" />
							<circle class="smiley__mouth2" cx="64" cy="64" r="56" transform="rotate(0,64,64)" />
						</g>
					</g>
				</g>
			</svg>
			</div>
		</div>`; data.insertBefore(newFreeformSpacer, data.firstChild); document.getElementById(`jumphere${sec}`).scrollIntoView(); var divElement = document.getElementById(`all_data${sec}`); divElement.firstElementChild.scrollIntoView(); _updateAiCatePillsStatus('disable'); document.getElementById(`hundredid${sec}`).click(); var image_url = $(this).data('img'); $("#mip").attr('src', image_url); var route = $("#routeToFullHdImageData").data('route'); var is_staging = (APP_LOCAL == 'production') ? 'false' : 'true'; $.ajax({
		url: route, method: "POST", data: { "image": image_url }, success: async function (resp) {
			var formData = new FormData(); formData.append("data", resp.data.image); aiAPI = `${GPU_SERVER_HOST}/fullhd?init=https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&id=${user.uid}&privateId=${resp.data.privateId}&is_staging=${is_staging}&roomtype=${resp.data.room_type}&design_style=${resp.data.style}&modeType=${resp.data.mode}&roomtype=${resp.data.room_type}`; await fetch(aiAPI, { method: 'POST', mode: 'cors', cache: 'no-cache', credentials: "include", headers: { accept: 'multipart/form-data', 'Access-Control-Allow-Origin': '*' }, crossDomain: true, body: formData, }).then(response => {
				if (response.status == 501) { modalStore.style.display = 'block'; }
				return response.json();
			}).then(result => {
				$('.ultra-enhancer').removeClass('disable-btn'); $('.full_hd_quality').removeClass('disable-btn'); $('._btn_gndeisgn').removeClass('disable-btn'); $('.precision_btn').removeClass('disable-btn'); var generated_image = result['Sucess']['generated_image'][0]; var original_image = result['Sucess']['original_image']; var data = document.getElementById(`all_data${sec}`); var newFreeformSpacer = document.createElement('div'); data.insertBefore(newFreeformSpacer, data.firstChild); var design = { original_url: original_image, generated_url: generated_image, style: resp.data.style, room_type: resp.data.room_type, mode: resp.data.mode, show_data: true, section: sec, private: resp.data.privateId, precisionUserValue: precisionUserValue, }
				var code = createDesignItem(design); var data = document.getElementById(`all_data${sec}`); document.getElementById(`progid`).style.display = 'none'; var newFreeformSpacer = document.createElement('div'); newFreeformSpacer.innerHTML = code; data.insertBefore(newFreeformSpacer, data.firstChild);
			}).catch(error => { console.error('Error:', error); });
		}, error: function (resp) { data = resp.responseJSON; }
	})
}); function changeMode(sec) { var modeValue = document.getElementById(`modeType${sec}`); var selectedOption = modeValue.options[modeValue.selectedIndex].value; var strengthValue = document.getElementById(`strength${sec}`); if (selectedOption === "Creative Redesign") { strengthValue.value = "low"; } else if (selectedOption === "Fill The Room" || selectedOption === "Fill The Exterior" || selectedOption === "Fill The Garden") { strengthValue.value = "mid"; $("#suggestionPrecisionModal").modal('show'); } else if (selectedOption === "Beautiful Redesign") { strengthValue.value = "mid"; } }
function showUpdateModal() { $("#modalUpgradePlan").modal('show'); }
function get_access_token() {
	var url = SITE_BASE_URL + 'getTokenDetails'
	$.ajax({
		url: url, type: "POST", async: false, success: function (resp) {
			if (resp.success == true) {
				let user_name = resp.data.name; let user_email = resp.data.email; aiAPI = `${API_GPU_SERVER_HOST}/get_token`; var payload = { "name": user_name, "email": user_email, }; fetch(aiAPI, { method: 'POST', headers: { 'Content-Type': 'application/json', }, crossDomain: true, body: JSON.stringify(payload), }).then(response => {
					if (response.status == 501) { modalStore.style.display = 'block'; }
					return response.json();
				}).then(result => { let access_Token = result.access_token; saveTokenToDatabase(user_email, access_Token); }).catch(error => { console.error('Error:', error); });
			} else { alert(resp.error); }
		}, error: function (resp) { }
	})
}
function saveTokenToDatabase(email, token) { const saveTokenAPI = '/api/save_token'; const payload = { email: email, access_token: token, }; $.ajax({ url: saveTokenAPI, type: "POST", data: payload, async: false, success: function (resp) { alert("Token Generated Succesfully"); window.location.reload(); }, error: function (resp) { data = false; } }) }
$(document).on('click', '.edit_with_precision', function () {
	if (user == null) { showLoginModal(); return; }
	var precisionUserValue = document.getElementById('precisionUser').value; if (!precisionUserValue) { $("#modalUpgradePlan").modal('show'); return; }
	var img = $(this).data('img'); var routeURL = document.getElementById('editAsPrecision').getAttribute('data-route'); $('.ultra-enhancer').addClass('disable-btn'); $('.full_hd_quality').addClass('disable-btn'); $('._btn_gndeisgn').addClass('disable-btn'); $('.precision_btn').addClass('disable-btn'); $.ajax({ type: 'POST', url: routeURL, data: { img: img }, success: function (response) { if (response && response.b64image) { var b64image = 'data:image/png;base64,' + response.b64image; sessionStorage.setItem('b64image', b64image); window.location.href = '/user/precision'; } }, error: function (error) { console.error('AJAX error:', error); } });
}); $("#closeserveyModal").click(function () { $("#serveyModal").hide(); }); $("#closeSuggestionPrecisionModal").click(function () { $("#suggestionPrecisionModal").hide(); }); $('document').ready(function () {
	if (window.innerWidth < 991) { initComparisons(); }
	else {
		var inkboxes = document.querySelectorAll(".inked-painted"); var coloredBoxes = document.querySelectorAll(".colored"); var fillerImages = document.querySelectorAll(".inked"); for (var i = 0; i < inkboxes.length; i++) { inkboxes[i].addEventListener("mousemove", trackLocation.bind(null, i), false); inkboxes[i].addEventListener("touchstart", trackLocation.bind(null, i), false); inkboxes[i].addEventListener("touchmove", trackLocation.bind(null, i), false); }
		function trackLocation(sectionIndex, e) { var rect = fillerImages[sectionIndex].getBoundingClientRect(); var position = ((e.pageX - rect.left) / fillerImages[sectionIndex].offsetWidth) * 100; if (position <= 100) { coloredBoxes[sectionIndex].style.width = position + "%"; } }
	}
}); function initComparisons() {
	var x, i; x = document.getElementsByClassName("colored"); for (i = 0; i < x.length; i++) { compareImages(x[i]); }
	function compareImages(img) {
		var slider, img, clicked = 0, w, h; w = img.offsetWidth; h = img.offsetHeight; img.style.width = (w / 2) + "px"; slider = document.createElement("DIV"); slider.setAttribute("class", "img-comp-slider"); img.parentElement.insertBefore(slider, img); slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px"; slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px"; slider.addEventListener("mousedown", slideReady); window.addEventListener("mouseup", slideFinish); slider.addEventListener("touchstart", slideReady); window.addEventListener("touchend", slideFinish); function slideReady(e) { e.preventDefault(); clicked = 1; window.addEventListener("mousemove", slideMove); window.addEventListener("touchmove", slideMove); }
		function slideFinish() { clicked = 0; }
		function slideMove(e) {
			var pos; if (clicked == 0) return false; pos = getCursorPos(e)
			if (pos < 0) pos = 0; if (pos > w) pos = w; slide(pos);
		}
		function getCursorPos(e) { var a, x = 0; e = (e.changedTouches) ? e.changedTouches[0] : e; a = img.getBoundingClientRect(); x = e.pageX - a.left; x = x - window.pageXOffset; return x; }
		function slide(x) { img.style.width = x + "px"; slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px"; }
	}
}
$("#closefeedbackModal").click(function () { $("#feedbackModel").hide(); }); $('#submitFeedbackRating').click(function () {
	var selectedRating = $('input[name="rate"]:checked').val(); if (selectedRating == undefined || selectedRating == '') { alert("Please select star to give rating!"); return }
	if (selectedRating <= 3) { $('.feedback_heading_div').hide(); $('.bad_review').show(); }
	else { $('.feedback_heading_div').hide(); $('.good_review').show(); storeReviews(); }
}); $("#submitFeedback").click(function () {
	var userFeedback = $('textarea[name="userfeedback"]').val(); if (userFeedback == undefined || userFeedback == '') { alert('Please fill the feedback!'); return }
	storeReviews(); $("#feedbackModel").hide();
}); $(".trustpilot-widget").click(function () { $("#feedbackModel").hide(); }); function storeReviews() { var selectedRating = $('input[name="rate"]:checked').val(); var userFeedback = $('textarea[name="userfeedback"]').val(); $.ajax({ type: "POST", url: SITE_BASE_URL + "userfeedback", data: { rating: selectedRating, feedback: userFeedback, }, success: function (response) { $('input[name="rate"]:checked').prop('checked', false); $('textarea[name="userfeedback"]').val(''); }, error: function (error) { console.log('error', error); } }); }