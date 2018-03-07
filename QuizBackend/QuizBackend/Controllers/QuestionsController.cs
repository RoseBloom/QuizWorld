using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuizBackend.Models;

namespace QuizBackend.Controllers
{
    [Produces("application/json")]
    [Route("api/Questions")]
    public class QuestionsController : Controller
    {
        readonly QuizContext context;
        public QuestionsController(QuizContext context)
        {
            this.context = context;
        }
        // GET api/values
        [HttpGet]
        public IEnumerable<Question> Get()
        {
            return new Question[] {
               new Question(){Text="hello"},
               new Question(){Text = "World"}
            };
        }
        // POST api/Questions
        [HttpPost]
        public void Post([FromBody]Question question)
        {
            context.Questions.Add(new Question() {Text = "Is the world Real?" });
            context.SaveChanges();
        }
    }
}