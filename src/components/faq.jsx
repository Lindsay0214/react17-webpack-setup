import { useState } from 'react'

function FAQ() {
    const [faqs, setFaqs] = useState([
        {
          question: 'How many programmers does it take to screw in a lightbulb?',
          answer: 'None. We don\'t address hardware issues.',
          open: true
        },
        {
          question: 'Who is the most awesome person?',
          answer: 'You. The Viewer.',
          open: false
        },
        {
          question: 'How many questions does it take to make a successful FAQ Page?',
          answer: 'This many.',
          open: false
        }
      ]);
    
      const toggleFAQ = index => {
        setFaqs(faqs.map((faq, i) => {
          if (i === index) {
            faq.open = !faq.open
          } else {
            faq.open = false;
          }
    
          return faq;
        }))
      }
    
    
      return (
          <div className="faqs">
            {faqs.map((faq, i) => (
                  <div>
                    <div className="grid grid-cols-1 m-10 content-center" faq={faq} index={i} toggleFAQ={toggleFAQ}>
                        <div className='mt-2 text-center w-full h-8 rounded-lg mb-8 border-2'>操作問題</div>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus architecto nesciunt laboriosam mollitia animi voluptate nihil veniam sed perspiciatis, alias reiciendis, culpa, vitae saepe omnis modi deserunt aperiam rerum harum.</p>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus architecto nesciunt laboriosam mollitia animi voluptate nihil veniam sed perspiciatis, alias reiciendis, culpa, vitae saepe omnis modi deserunt aperiam rerum harum.</p>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus architecto nesciunt laboriosam mollitia animi voluptate nihil veniam sed perspiciatis, alias reiciendis, culpa, vitae saepe omnis modi deserunt aperiam rerum harum.</p>
                    </div>
                </div>
            ))}
          </div>
      );
}

export default FAQ;