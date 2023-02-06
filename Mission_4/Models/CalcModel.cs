using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission_4.Models
{
    public class CalcModel
    {
        // Builds Getter & Setter
        [Required]
        [Range(0, 100)]
        public int assignments { get; set; }
        [Required]
        [Range(0, 100)]
        public int groupProjects { get; set; }
        [Required]
        [Range(0, 100)]
        public int quizzes { get; set; }
        [Required]
        [Range(0, 100)]
        public int midterm  { get; set; }
        [Required]
        [Range(0, 100)]
        public int final { get; set; }
        [Required]
        [Range(0, 100)]
        public int intex { get; set; }

    }
}
