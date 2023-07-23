let welcomeMsg = 'welcome to this channel';

let text = document.getElementById('text');
text.innerHTML = welcomeMsg;

let input = document.getElementById('input');
input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        // * مقداری که کاربر توی 
        // * input 
        // * مینویسه رو با متن خودمون مقایسه کنم
        // ! if (event.target.value === welcomeMsg) {
        // !     alert('آفرین!')
        // ! }
        // ! else {
        // !     alert('متاسفانه چیزی که تایپ کردی با مقداری که خواستیم یکسان نبود!')
        // ! }

        // * جستجوی یک عبارت داخل متن
        // ! let founded = welcomeMsg.search(event.target.value); // اگر عبارت گفته شده توی متغیر بود یک عددی که بزرگتر از -1 هستش
        // ! if (founded >= 0) {
        // !     alert(`عبارت ${event.target.value} در جایگاه ${founded} پیدا شد.`);
        // !     console.log(founded)
        // ! }

        // * جایگزینی یک عبارت در متن
        //! let newMsg = welcomeMsg.replace('this', event.target.value); // string
        //! text.innerHTML = newMsg;
    }
})