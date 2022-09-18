jQuery(() => {
    lms_client_content_gallery_fetch()
})

function lms_client_content_gallery_fetch() {
    jQuery.get(lms_client_content_gallery.content_list_url, {page: lms_client_content_gallery.current_page}, response => {
        jQuery('div.lms-client-content-gallery').html(response)
    })
}

function lms_client_content_gallery_prev() {
    lms_client_content_gallery.current_page--;
    lms_client_content_gallery_fetch()
}

function lms_client_content_gallery_next() {
    lms_client_content_gallery.current_page++;
    lms_client_content_gallery_fetch()}