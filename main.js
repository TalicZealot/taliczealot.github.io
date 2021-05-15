let khaoticPanel = $("#khaos-actions-khaotic");
let debuffsPanel = $("#khaos-actions-debuffs");
let buffsPanel = $("#khaos-actions-buffs");

let khaoticButton = $("#button-actions-khaotic");
let debuffsButton = $("#button-actions-debuffs");
let buffsButton = $("#button-actions-buffs");

khaoticButton.on("click", function(){
    khaoticPanel.removeClass('hidden');
    debuffsPanel.addClass('hidden');
    buffsPanel.addClass('hidden');
});

debuffsButton.on("click", function(){
    debuffsPanel.removeClass('hidden');
    khaoticPanel.addClass('hidden');
    buffsPanel.addClass('hidden');
});

buffsButton.on("click", function(){
    buffsPanel.removeClass('hidden');
    debuffsPanel.addClass('hidden');
    khaoticPanel.addClass('hidden');
});