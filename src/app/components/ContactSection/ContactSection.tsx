function ContactSection() {
  return (
    <div className="h-screen bg-blue-200 flex items-center justify-center">
      <div className="bg-green-100 p-10">
        <h5 className="text-4xl mb-10">Let&apos;s work together!</h5>
        <div className="bg-green-600 flex justify-evenly">
          <a className="bg-red-200 text-xl p-3 cursor-pointer">Contact me</a>
          <a className="bg-red-200 text-xl p-3 cursor-pointer">Linkedin</a>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
