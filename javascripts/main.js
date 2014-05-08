$('.accordion').on('click', function(){
    $(this).toggleClass('expanded');
});
 
$('.toggle-pop-up').on('click', function(){
    $('body').toggleClass('show-pop-up');
});

$('.swipebox').swipebox({
    beforeOpen: function() {$('.content').css('position', 'fixed');}, // called before opening
    afterClose: function() {$('.content').css('position', 'static');} // called after closing
});

$('.hamburger').on('click', function(){
    $('.header-menu').toggleClass('expanded');
});

$('#add-another-photo').on('click', function(){
  $(this).before('<input type="file">');
});

$( ".calendar" ).on( "swipeleft", function(){
    alert('change to previous days');
});

$( ".calendar" ).on( "swiperight", function(){
    alert('change to following days');
});

$('.calendar td').on('click', function(){
    $(this).toggleClass('highlighted');
});

$('.toggle-images').on('click', function(){
  $('.images').toggleClass('view-all');
});


/* checkboxes */

// custom checkbox module
jcf.addModule({
    name:'checkbox',
    selector:'input[type="checkbox"]',
    defaultOptions: {
        wrapperClass:'chk-area',
        focusClass:'chk-focus',
        checkedClass:'chk-checked',
        labelActiveClass:'chk-label-active',
        uncheckedClass:'chk-unchecked',
        disabledClass:'chk-disabled',
        chkStructure:'<span></span>'
    },
    setupWrapper: function(){
        jcf.lib.addClass(this.fakeElement, this.options.wrapperClass);
        this.fakeElement.innerHTML = this.options.chkStructure;
        this.realElement.parentNode.insertBefore(this.fakeElement, this.realElement);
        jcf.lib.event.add(this.realElement, 'click', this.onRealClick, this);
        this.refreshState();
    },
    onFakePressed: function() {
        jcf.modules[this.name].superclass.onFakePressed.apply(this, arguments);
        if(!this.realElement.disabled) {
            this.realElement.focus();
        }
    },
    onFakeClick: function(e) {
        jcf.modules[this.name].superclass.onFakeClick.apply(this, arguments);
        this.tmpTimer = setTimeout(jcf.lib.bind(function(){
            this.toggle();
        },this),10);
        return false;
    },
    onRealClick: function(e) {
        setTimeout(jcf.lib.bind(function(){
            this.refreshState();
        },this),10);
        e.stopPropagation();
    },
    toggle: function(e){
        if(!this.realElement.disabled) {
            if(this.realElement.checked) {
                this.realElement.checked = false;
            } else {
                this.realElement.checked = true;
            }
        }
        this.refreshState();
        return false;
    },
    refreshState: function(){
        if(this.realElement.checked) {
            jcf.lib.addClass(this.fakeElement, this.options.checkedClass);
            jcf.lib.removeClass(this.fakeElement, this.options.uncheckedClass);
            if(this.labelFor) {
                jcf.lib.addClass(this.labelFor, this.options.labelActiveClass);
            }
        } else {
            jcf.lib.removeClass(this.fakeElement, this.options.checkedClass);
            jcf.lib.addClass(this.fakeElement, this.options.uncheckedClass);
            if(this.labelFor) {
                jcf.lib.removeClass(this.labelFor, this.options.labelActiveClass);
            }
        }
        if(this.realElement.disabled) {
            jcf.lib.addClass(this.fakeElement, this.options.disabledClass);
            if(this.labelFor) {
                jcf.lib.addClass(this.labelFor, this.options.labelDisabledClass);
            }
        } else {
            jcf.lib.removeClass(this.fakeElement, this.options.disabledClass);
            if(this.labelFor) {
                jcf.lib.removeClass(this.labelFor, this.options.labelDisabledClass);
            }
        }
        jQuery(this.realElement).trigger('change');
    }
});
