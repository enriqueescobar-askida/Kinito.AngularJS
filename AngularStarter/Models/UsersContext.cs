namespace AngularStarter.Models
{
    using System.Data.Entity;

    /// <summary>
    /// The users context.
    /// </summary>
    public class UsersContext : DbContext
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UsersContext"/> class.
        /// </summary>
        public UsersContext()
            : base("DefaultConnection")
        {
        }

        /// <summary>
        /// Gets or sets the user profiles.
        /// </summary>
        public DbSet<UserProfile> UserProfiles { get; set; }
    }
}