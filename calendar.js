const calendar = () => {

    const inputYear = prompt("year을 입력하시오.");
    const inputMonth = prompt("Month를 입력하시오.");

    const date = new Date(inputYear, inputMonth - 1, 1); // returns the month (from 0-11)
    const month = date.getMonth(); // 월
    const year = date.getFullYear(); // 년

    let daysList = ''; // 요일 
    let startBlank = ''; // 첫날짜 시작전 공백
    let dayStr = ''; // 날짜를 출력

    const months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    const days = new Array('Mon', 'Thu', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun');

    const currentMonth = new Date(year, month, 1); // 현재달에 대한 Date객체
    const nextMonth = new Date(year, month + 1, 0); // 다음달에 대한 Date객체, 세번째 인자에 0을 넣으면 이전달의 마지막 날을 알 수 있다.

    let firstWeekDay = currentMonth.getDay(); // returns the day of the week (from 0-6), 월요일부터 시작하기위해 -1 하여 한칸씩 앞으로 옮긴다.
    const daysInCurrentMonth = ((nextMonth.getTime() - currentMonth.getTime()) / (1000 * 60 * 60 * 24)); // 해당달 날짜 개수 


    firstWeekDay = (firstWeekDay === 0) ? 6 : firstWeekDay - 1; // 한칸씩 앞으로 옮기는데, 0값이 나오면 -2가 되기 때문에 sun 으로 세팅을해준다.(sun -> 6)

    days.forEach(val => { // 요일 목록 출력
        daysList += val + '  ';
    });

    for (let i = 0; i < firstWeekDay; i++) { // 첫 날짜 출력전에 공백을 나타냄
        startBlank += '     ';
    }

    for (let i = 0; i <= daysInCurrentMonth; i++) { // 입력 달에 대한 날짜만큼 loop를 돌며 날짜를 출력
        firstWeekDay %= 7;
        
        if (i === 0 && firstWeekDay !== 0) { //loop 최초에만 blank를 채운다.
            dayStr += startBlank;
        }

        if (firstWeekDay === 0 && i !== 0) { // 7번째 위치에서 한줄 내린다.
            dayStr += '\n';
        }

        dayStr = (i < 9) ? dayStr += `    ${i + 1}` : dayStr += `   ${i + 1}`; //한자리 숫자와 두자리 숫자에 대한 간격을 맞춘다.
        firstWeekDay++; //다음 날짜로 이동
    }

    console.log('            ' + months[month] + '   ' + year + '\n\n'); // Console output
    console.log('  ' + daysList);
    console.log(dayStr);
}