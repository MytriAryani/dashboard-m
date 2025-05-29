export default function ContactUs(){
    return(
        <div className="mt-15">
            <div className="flex flex-col justify-center items-center">
                <p className="text-xl text-[#04969b] font-medium text-center">GET IN TOUCH</p>
                <p className="text-4xl font-semibold mt-2  text-center">Contact Us</p>
                <p className="text-[#bebdbd] text-m mt-2  text-center">We'd love to hear from you. Whether it's support, bulk inquiries, or just feedback.</p>
            </div>
            <div className="mt-8 px-4 max-w-xl mx-auto">
        <form className="flex flex-col space-y-4">
          <div className="flex flex-row justify-between flex-wrap gap-2">
              <div className="flex-1 flex flex-col gap-3">
                  <label htmlFor="name">Name</label>
                  <input
                  
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="p-2 rounded border border-gray-300 text-[#02a8ad]"
                  />
              </div>
              <div className="flex-1 flex flex-col gap-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="p-2 rounded border border-gray-300 text-[#02a8ad]"
                  />
              </div>
          </div>

          <label htmlFor="subject">Subject</label>
          <select id="subject" className="p-2 rounded border border-gray-300 text-[#02a8ad]">
            <option value="">Choose...</option>
            <option value="support">Support</option>
            <option value="bulkorder">Bulk Order</option>
            <option value="feedback">Feedback</option>
          </select>

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={3}
            placeholder="Type your message"
            className="p-2 rounded border border-gray-300 text-[#02a8ad]"
          />

          <button
            type="submit"
            className="bg-[#04969b] text-white px-4 py-2 my-5 cursor-pointer rounded hover:bg-[#037f85] transition"
          >
            Send Message
          </button>
        </form>
      </div>
        </div>
    );
}