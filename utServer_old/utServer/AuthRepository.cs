using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Threading.Tasks;

namespace utServer.API
{
	public class AuthRepository : IDisposable
	{
		//private AuthContext _ctx;

		//private UserManager<IdentityUser> _userManager;

		public AuthRepository()
		{
			//_ctx = new AuthContext();
			//_userManager = new UserManager<IdentityUser>(new UserStore<IdentityUser>(_ctx));
		}

		//public async Task<IdentityResult> RegisterUser(UserModel userModel)
		//{
		//	IdentityUser user = new IdentityUser
		//	{
		//		UserName = userModel.UserName
		//	};

		//	var result = await _userManager.CreateAsync(user, userModel.Password);

		//	return result;
		//}

		//public async Task<IdentityUser> FindUser(string userName, string password)
		//{
		//	//IdentityUser user = await _userManager.FindAsync(userName, password);

		//	//return user;

  //          //TODO: Implement Windows Authentication to verify the user.
		//}

		public void Dispose()
		{
			//_ctx.Dispose();
			//_userManager.Dispose();

		}
	}
}
