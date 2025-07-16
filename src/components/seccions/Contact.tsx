import { motion } from "framer-motion"
import { Mail } from "lucide-react"

import { Button } from '@/components/ui/button'

const Contact = () => {
  return (
    <section id='contact' className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Let's Work Together
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8'></div>
            <p className='text-xl text-gray-300 mb-12 max-w-2xl mx-auto'>
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can bring your ideas to life.
            </p>

            <motion.div
              className='flex flex-col sm:flex-row gap-6 justify-center items-center'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button
                size='lg'
                className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3'
              >
                <Mail className='mr-2' size={20} />
                Send Message
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='border-white/20 text-white hover:bg-white/10 px-8 py-3 bg-transparent'
              >
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
  )
}

export default Contact
