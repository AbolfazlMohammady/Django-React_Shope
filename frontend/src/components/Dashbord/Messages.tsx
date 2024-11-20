function Messages() {
  const messages = [
    { message: "تجربه خریدت برامون مهمه", date: "۲۵ اردیبهشت ۱۴۰۲" },
    {
      message: "سفارش شما با کد ۴۵۸۷۹۶۲۵ ثبت شده و در حال پردازش است",
      date: "۲ اردیبهشت ۱۴۰۲",
    },
    {
      message: "مبلغ سفارش لغو شده به حساب شما واریز شد",
      date: "۲ اسفند ۱۴۰۱",
    },
  ];

  return (
    <div className="w-[90%] mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6 border-b pb-4 bor ">پیغام‌ها</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {messages.map((msg, index) => (
          <MessageCard key={index} message={msg.message} date={msg.date} />
        ))}
      </div>
    </div>
  );
}

export default Messages;

function MessageCard({ message, date }:any) {
  return (
    <div className="w-full border rounded-md p-4 flex flex-col gap-2 justify-between items-start shadow-sm">
      <p className="text-gray-700 flex items-start">
        <span className="text-green-500 ml-2">🔔</span>
        {message}
      </p>
      <span className="text-gray-500 text-sm">{date}</span>
    </div>
  );
}
