public abstract class Result
{
	public abstract string Message { get; }
}

public sealed class Success: Result
{
	private string _message, _winner;

	public Success(string message, string winner)
	{
		this._message = message;
		this._winner = winner;
	}

	public override string Message { get { return _message; } }
	public string Winner { get { return _winner; } }
}

public sealed class Error: Result
{
	private string _message, _sender_name;

	public Error(string message, string sender_name)
	{
		this._message = message;
		this._sender_name = sender_name;
	}

	public override string Message { get { return _message; } }
	public string SenderName { get { return _sender_name; } }
}

public sealed class GameSurface
{
	public Player FirstPlayer { get; set; }
	public Player SecondPlayer { get; set; }
	public AIProvider AIFirst { get ; set; }
	public AIProvider AISecond { get ; set; }
	public Result Run()
	{
		while(true)
		{
			this.AIFirst.Do(this);
			this.FirstPlayer.Move();
			this.AISecond.Do(this);
			this.SecondPlayer.Move();
			var test = this.Test();
			if(test != null)
				return test;
		}
	}
}

public sealed class Player
{
	public double Acceleration { get; set; }
	public double Speed { get; private set; }
	public double Y { get; private set; }
	public Rocket FirstRocket { get; private set; }
	public Rocket SecondRocket { get; private set; }
	public void Move()
	{
		Y += Speed;
		Speed += Acceleration;
	}
}

public sealed class Rocket
{
	public ulong Timeout { get; private set; }
	public bool IsRun { get; private set; }
	public double YSpeed { get; private set; }
	public double XSpeed { get; private set; }
	public double Y { get; private set; }
	public double X { get; private set; }
	public void Move()
	{
		X += XSpeed;
		Y += YSpeed;
	}
}

public sealed class AIProvider
{
	public void Do(GameSurface surface)
	{
		
	}
}