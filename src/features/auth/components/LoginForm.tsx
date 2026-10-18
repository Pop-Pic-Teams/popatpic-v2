import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Lock, User } from 'lucide-react';

interface LoginFormProps {
  onSuccess?: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const { login } = useAuth();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const res = await login(identifier, password);
      if (res.success) {
        onSuccess?.();
      } else {
        setError(res.error || 'Invalid username or password. Please try again.');
      }
    } catch (err: any) {
      setError(err?.message || 'Login failed.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="rounded-lg bg-red-50 p-3 text-xs text-red-700 border border-red-200">
          {error}
        </div>
      )}

      <Input
        label="Username or Email"
        type="text"
        placeholder="Enter your username (e.g. creator or admin)"
        value={identifier}
        onChange={(e) => setIdentifier(e.target.value)}
        leftIcon={<User className="h-4 w-4" />}
        required
      />

      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        leftIcon={<Lock className="h-4 w-4" />}
        required
      />

      <Button
        type="submit"
        isLoading={isLoading}
        className="w-full"
      >
        Sign In
      </Button>
    </form>
  );
};
